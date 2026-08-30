export class RateLimiter {
  private windowSize: number;
  private maxRequests: number;
  private store: Map<string, { count: number; resetTime: number }>;

  constructor(windowSizeMs: number = 60000, maxRequests: number = 10) {
    this.windowSize = windowSizeMs;
    this.maxRequests = maxRequests;
    this.store = new Map();
  }

  check(ip: string): { success: boolean; limit: number; remaining: number; resetTime: number } {
    const now = Date.now();
    let record = this.store.get(ip);

    if (!record || now > record.resetTime) {
      record = { count: 0, resetTime: now + this.windowSize };
      this.store.set(ip, record);
    }

    const remaining = Math.max(0, this.maxRequests - record.count);
    const success = record.count < this.maxRequests;

    if (success) {
      record.count++;
      this.store.set(ip, record);
    }

    return {
      success,
      limit: this.maxRequests,
      remaining,
      resetTime: record.resetTime
    };
  }

  cleanup() {
    const now = Date.now();
    for (const [key, record] of this.store.entries()) {
      if (now > record.resetTime) {
        this.store.delete(key);
      }
    }
  }
}

// Global instance for simple rate limiting (memory-based)
export const loginRateLimiter = new RateLimiter(60000 * 5, 5); // 5 attempts per 5 minutes
