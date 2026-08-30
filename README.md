# 🎬 i8K 影视导航 (i8K Video Navigation)

<p align="center">
  <strong>现代化、高性能的高清影视资源与字幕工具导航平台，配备全功能管理后台</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.x-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.x-61dafb?style=flat-square&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Drizzle_ORM-0.45-c5f74f?style=flat-square&logo=drizzle" alt="Drizzle ORM" />
  <img src="https://img.shields.io/badge/Cloudflare-D1_SQLite-f38020?style=flat-square&logo=cloudflare" alt="Cloudflare D1" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/i18n-next--intl-blue?style=flat-square" alt="next-intl" />
</p>

---

## 📖 项目简介

**i8K 影视导航** 是一个专为影视爱好者、影评人与资源搜索者打造的现代化影视导航系统。前台具备精致的拟物与毛玻璃质感 UI、平滑动画、多引擎搜索和多语言国际化支持；后台提供直观高效的分类管理、网站卡片收录与全站配置面板。

无需复杂配置，即使未连接外部数据库，系统内置的默认影视数据也能让平台**开箱即用**。

---

## ✨ 核心特性

- 🎨 **极致视觉与交互体验**
  - 基于 Tailwind CSS v4 与 Framer Motion 打造流畅微动画与卡片悬停交互。
  - 支持 **深色模式 (Dark) / 浅色模式 (Light) / 跟随系统** 自由切换。
  - 支持自定义卡片渐变背景（Gradient）与星级评分展示。

- 🌐 **全站国际化 (i18n)**
  - 基于 `next-intl` 实现多语言路由与内容切换（支持简体中文 `zh` 与 英文 `en`）。
  - 支持对分类名称、网站名称、网站简介及全站标题进行中英文双语配置。

- 🔍 **多引擎聚合搜索**
  - 支持站内实时过滤搜索收录的影视网站。
  - 一键切换至 **豆瓣电影**、**IMDb** 等外部主流影视数据库搜索。

- 🛠️ **全功能后台管理系统 (`/[locale]/admin`)**
  - **全站设置**：可视化修改站点中英文标题、副标题、页脚版权等元数据。
  - **分类管理**：支持新增/编辑/删除分类、Emoji 图标选择、拖拽或权重排序。
  - **网站管理**：支持收录网站、编辑 URL/Favicon/标签/评分、设置 **HOT 热门** 与 **⭐ 推荐** 标记。

- ⚡ **无服务器数据库与双模式降级**
  - 接入 **Cloudflare D1** (Serverless SQLite)，配合 **Drizzle ORM** 实现极速读写与缓存重新验证。
  - 内置优雅降级方案：未配置 Cloudflare D1 时自动加载精选初始数据，无需担心启动报错。

- 🔐 **安全与访问控制**
  - 基于 JWT + HttpOnly 安全 Cookie 的身份认证机制。
  - Next.js Middleware 路由中间件拦截保护后台接口与页面。
  - 内置 IP 维度的登录防爆破限流器（Rate Limiter）。

---

## 🛠️ 技术栈

| 层次 | 技术选型 | 说明 |
| :--- | :--- | :--- |
| **前端框架** | [Next.js 16 (App Router)](https://nextjs.org/) + [React 19](https://react.dev/) | 混合服务端渲染 (SSR) 与客户端组件 |
| **开发语言** | [TypeScript](https://www.typescriptlang.org/) | 全栈类型安全 |
| **样式体系** | [Tailwind CSS v4](https://tailwindcss.com/) + PostCSS | 极简、现代化的原子化样式体系 |
| **动画 & 图标** | [Framer Motion](https://www.framer.com/motion/) + [Lucide React](https://lucide.dev/) | 流畅的过渡动画与精美矢量图标 |
| **国际化** | [next-intl](https://next-intl-docs.vercel.app/) | 双语国际化路由与多语言字典 |
| **数据库 & ORM** | [Cloudflare D1](https://developers.cloudflare.com/d1/) + [Drizzle ORM](https://orm.drizzle.team/) | Serverless SQLite 与类型化 ORM |
| **身份认证** | [jose](https://github.com/panva/jose) (JWT) | 高性能轻量级 JWT 签名与加解密 |
| **主题切换** | [next-themes](https://github.com/pacocoursey/next-themes) | 无闪烁的主题切换管理 |

---

## 🚀 快速开始

### 1. 环境准备

确保你的本地环境已安装 [Node.js](https://nodejs.org/) (推荐 **v18.17.0** 或更高版本) 以及 `npm` / `pnpm` / `yarn`。

### 2. 克隆与安装依赖

```bash
# 进入项目根目录
cd i8k-nav

# 安装项目依赖
npm install
```

### 3. 配置环境变量

复制环境变量示例文件并修改配置：

```bash
cp .env.example .env
```

打开 `.env` 文件，根据实际情况修改配置（若仅本地体验，只需设置管理员密码）：

```env
# 应用运行端口
PORT=3026

# 管理后台登录密码 (必须配置)
ADMIN_PASSWORD=your_admin_password_here

# JWT 签名密钥 (建议设置为 32 位以上随机字符串)
JWT_SECRET=your_jwt_secret_key_32bytes_random_string

# Cloudflare D1 数据库配置 (可选，不配置时自动使用系统默认内置数据)
CLOUDFLARE_ACCOUNT_ID=your_cloudflare_account_id
CLOUDFLARE_D1_DATABASE_ID=your_d1_database_id
CLOUDFLARE_API_TOKEN=your_cloudflare_api_token
```

### 4. 启动开发服务器

```bash
npm run dev
```

启动成功后，在浏览器访问：
- **前台导航首页**：[http://localhost:3000](http://localhost:3000)
- **管理后台**：[http://localhost:3000/zh/admin](http://localhost:3000/zh/admin) （登录密码为你设置的 `ADMIN_PASSWORD`）

---

## 🗄️ 数据库配置 (Cloudflare D1)

如果你希望将数据持久化到自己的 Cloudflare D1 数据库中：

### 1. 创建 D1 数据库
通过 Cloudflare 网页控制台或 Wrangler CLI 创建一个 D1 数据库：
```bash
npx wrangler d1 create i8k-db
```

### 2. 获取凭证并填入 `.env`
- `CLOUDFLARE_ACCOUNT_ID`: Cloudflare 账户 ID（在控制台概览右侧查看）
- `CLOUDFLARE_D1_DATABASE_ID`: 创建好的 D1 数据库 ID (UUID)
- `CLOUDFLARE_API_TOKEN`: 具备 D1 读写权限的 API Token

### 3. 推送数据库表结构
执行 Drizzle 命令同步表结构至 D1 数据库：
```bash
npm run db:push
```

---

## 📜 常用命令

| 命令 | 描述 |
| :--- | :--- |
| `npm run dev` | 以 Turbopack 模式启动本地开发服务 |
| `npm run build` | 构建 Next.js 生产版本包 |
| `npm run start` | 启动生产环境服务 |
| `npm run lint` | 运行 ESLint 代码规范检查 |
| `npm run db:generate` | 生成 Drizzle 数据库迁移文件 |
| `npm run db:push` | 将本地 schema 直接同步/推送到 Cloudflare D1 数据库 |
| `npm run db:studio` | 启动 Drizzle Studio 可视化数据管理面板 |

---

## 📁 目录结构

```text
i8k-nav/
├── messages/                     # 国际化语言包 (zh.json / en.json)
├── src/
│   ├── app/
│   │   ├── [locale]/             # 国际化动态路由 ([locale] = zh | en)
│   │   │   ├── about/            # 关于页面
│   │   │   ├── admin/            # 后台管理页面与登录页面
│   │   │   ├── layout.tsx        # 局部布局 (包含 i18n 提供者)
│   │   │   └── page.tsx          # 首页导航
│   │   ├── api/                  # 后端 API 路由
│   │   │   ├── admin/            # 后台数据管理接口 (categories / settings / sites)
│   │   │   └── auth/             # 登录/登出与身份验证接口
│   │   ├── globals.css           # 全局样式与 Tailwind 主题定义
│   │   └── layout.tsx            # 全局根布局
│   ├── components/
│   │   ├── home/                 # 首页组件 (Header, SiteCard, SiteGrid, CategorySidebar)
│   │   ├── layout/               # 公共布局组件
│   │   └── providers/            # 主题与状态上下文 Providers
│   └── lib/
│       ├── auth.ts               # JWT 签名、校验与 Session 管理
│       ├── rateLimit.ts          # 内存版 IP 防刷限流器
│       ├── db/
│       │   ├── client.ts         # Cloudflare D1 数据库连接客户端
│       │   ├── queries.ts        # 数据库 CRUD 查询与默认回退数据
│       │   └── schema.ts         # Drizzle ORM 数据表 Schema 定义
│       └── i18n/                 # 国际化配置与中间件工具
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Actions 自动化 SSH + Docker Compose 部署流水线
├── middleware.ts                 # Next.js 路由守卫与 i18n 拦截中间件
├── drizzle.config.ts             # Drizzle Kit 配置文件
├── next.config.ts                # Next.js 核心配置文件
├── Dockerfile                    # Docker 生产镜像构建文件 (多阶段构建 + Standalone 优化)
├── compose.yaml                  # Docker Compose 一键编排部署文件
├── .dockerignore                 # Docker 构建忽略规则
├── .gitignore                    # Git 版本控制忽略规则
├── package.json
└── README.md
```

---

## 🐳 Docker 容器化部署 (推荐)

项目已内置经过深层优化的多阶段 `Dockerfile` 与 `compose.yaml`，配合 Next.js Standalone 模式构建极轻量镜像。

### 1. 一键启动服务

确保服务器已安装 Docker & Docker Compose，然后在项目根目录下执行：

```bash
# 复制并配置环境变量
cp .env.example .env
# 编辑 .env 文件，填入你的管理员密码和 Cloudflare 凭证
nano .env

# 后台构建并启动容器
docker compose up -d --build
```

### 2. 常用 Docker 维护命令

```bash
# 查看实时运行日志
docker compose logs -f

# 停止并移除容器
docker compose down

# 重启服务
docker compose restart

# 更新代码后重新构建并无缝更新
git pull
docker compose up -d --build
```

---

## 🚀 其它部署方式

### 方式一：Vercel 部署
1. 将代码推送到 GitHub / GitLab 代码仓库。
2. 登录 [Vercel](https://vercel.com/)，点击 **Add New Project** 导入该仓库。
3. 在 Environment Variables 中配置 `ADMIN_PASSWORD`、`JWT_SECRET` 以及 Cloudflare D1 相关变量。
4. 点击 **Deploy** 即可一键完成部署。

### 方式二：Node.js 原生 / PM2 部署
1. 在服务器上执行构建：
   ```bash
   npm run build
   ```
2. 启动生产服务：
   ```bash
   npm run start
   ```
   或使用 `PM2` 守护进程：
   ```bash
   pm2 start npm --name "i8k-nav" -- start
   ```

---

## 🕷️ 批量采集与自动入库工具 (Scraper CLI)

项目内置了通用的导航站点采集与自动入库脚本 [`scripts/scrape.js`](file:///c:/Users/along4090PC/.gemini/antigravity/scratch/i8k-nav/scripts/scrape.js)，能够智能识别目标网页的卡片标题、跳转 URL、Favicon 图标、标签、评分及分类，并生成带防重保护的 SQL 或直接一键入库。

### 常用命令示例：

```bash
# 1. 采集任意导航网站并生成 JSON 与 SQL 导入文件（安全预览）
npm run scrape https://target-nav-website.com

# 2. 采集目标网站并直接自动导入到 Cloudflare D1 远端数据库
npm run scrape https://target-nav-website.com -- --import

# 3. 指定全部站点归属于特定分类（例如 "动漫动画" 或 "聚合搜索"）
npm run scrape https://target-nav-website.com -- --category="动漫动画" --import

# 4. 从本地已保存的 HTML 离线文件采集
node scripts/scrape.js ./saved_page.html --import
```

---

## 📄 免责声明与许可

- 本项目收录与展示的链接均来自于互联网公开内容，平台仅提供导航与索引服务，不存储或分发任何受版权保护的影视音视频内容。
- 本项目采用 **MIT License** 开源协议，欢迎自由定制与二次开发。

