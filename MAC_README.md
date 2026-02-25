# 中国汽车市场智能分析平台 - Mac 本地运行指南

## 🚀 快速开始

### 1. 解压文件
```bash
tar -xzvf ami-for-mac.tar.gz
cd auto-market-intelligence
```

### 2. 一键启动（推荐）
```bash
./start-mac.sh
```

### 3. 手动启动
```bash
cd apps/web
npm install
npm run dev
```

### 4. 访问网站
打开浏览器访问: http://localhost:3000

---

## 📋 系统要求

- **Node.js**: v18 或更高版本
- **npm**: v9 或更高版本

安装 Node.js: https://nodejs.org

---

## 🔧 常用命令

```bash
# 安装依赖
cd apps/web && npm install

# 开发模式（热更新）
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run start
```

---

## 📁 项目结构

```
auto-market-intelligence/
├── apps/web/              # 前端代码
│   ├── app/               # 页面
│   ├── components/        # 组件
│   ├── lib/               # 工具函数
│   └── package.json       # 依赖
├── docs/                  # 文档
├── start-mac.sh           # Mac 启动脚本
└── README.md              # 说明
```

---

## 🌐 访问地址

- 首页: http://localhost:3000
- 工作台: http://localhost:3000/workbench

---

## 🐛 常见问题

### 1. 端口被占用
```bash
# 修改端口
npm run dev -- --port 3001
```

### 2. 依赖安装失败
```bash
# 清除缓存重试
rm -rf node_modules package-lock.json
npm install
```

### 3. 构建失败
```bash
# 检查 Node.js 版本
node -v  # 需要 v18+
```

---

## 📞 帮助

如有问题，请查看:
- README.md - 项目说明
- DEPLOY.md - 部署指南
