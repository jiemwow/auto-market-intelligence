# 中国汽车市场智能分析平台 - 使用说明

## ⚠️ 重要提示

**不要直接用浏览器打开 HTML 文件！**

直接打开 `index.html` 会导致 CSS 和 JavaScript 无法加载，页面只显示文字。

## ✅ 正确使用方法

### 方法 1：使用开发服务器（推荐）

```bash
# 1. 进入项目目录
cd auto-market-intelligence/apps/web

# 2. 安装依赖（首次需要）
npm install

# 3. 启动开发服务器
npm run dev

# 4. 浏览器访问 http://localhost:3000
```

### 方法 2：使用 Python 临时服务器

```bash
# 进入 dist 目录
cd auto-market-intelligence/apps/web/dist

# Python 3
python3 -m http.server 3000

# 浏览器访问 http://localhost:3000
```

### 方法 3：使用 Node.js 的 serve

```bash
# 全局安装 serve
npm install -g serve

# 进入 dist 目录
cd auto-market-intelligence/apps/web/dist

# 启动服务器
serve -p 3000

# 浏览器访问 http://localhost:3000
```

## 🚀 一键启动脚本

```bash
# 在项目根目录运行
./start.sh
```

## 🌐 访问地址

启动服务器后，浏览器访问：
- http://localhost:3000

## ❌ 错误示范

```bash
# 不要这样做！
open index.html  # ❌ CSS 无法加载
```

## 💡 为什么需要服务器？

Next.js 生成的静态文件使用绝对路径（如 `/_next/static/...`），需要服务器来正确解析这些路径。直接打开文件时，浏览器无法找到这些资源。
