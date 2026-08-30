import { drizzle } from 'drizzle-orm/sqlite-proxy';
import * as schema from './schema';

const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
const databaseId = process.env.CLOUDFLARE_D1_DATABASE_ID;
const token = process.env.CLOUDFLARE_API_TOKEN;

const D1_API_URL = accountId && databaseId
  ? `https://api.cloudflare.com/client/v4/accounts/${accountId}/d1/database/${databaseId}/query`
  : null;

async function d1Fetch(
  sql: string,
  params: unknown[],
  method: 'run' | 'all' | 'values'
): Promise<{ rows: unknown[][] }> {
  if (!D1_API_URL || !token) {
    throw new Error('Cloudflare D1 credentials missing (CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_D1_DATABASE_ID, CLOUDFLARE_API_TOKEN)');
  }

  const isMutation = /^(insert|update|delete)\b/i.test(sql.trim());

  const res = await fetch(D1_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ sql, params }),
    cache: 'no-store',
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`D1 HTTP API error: ${res.status} – ${err}`);
  }

  const json = (await res.json()) as {
    success: boolean;
    errors: { message: string }[];
    result: { results: Record<string, unknown>[]; success: boolean }[];
  };

  if (!json.success || json.errors?.length > 0) {
    throw new Error(
      `D1 query error: ${json.errors?.map((e) => e.message).join(', ')}`
    );
  }

  const result = json.result?.[0];
  if (!result) return { rows: [] };

  if (method === 'run') return { rows: [] };

  const rows = result.results ?? [];
  if (rows.length === 0) return { rows: [] };

  const keys = Object.keys(rows[0]);
  return {
    rows: rows.map((row) => keys.map((k) => row[k])),
  };
}

export const db = drizzle(
  async (sql, params, method) => {
    return d1Fetch(sql, params, method as 'run' | 'all' | 'values');
  },
  { schema }
);

export type DB = typeof db;
