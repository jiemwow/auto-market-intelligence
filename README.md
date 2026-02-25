# 中国汽车市场智能分析平台

基于海量销量数据的市场分析与可视化平台

## 🚀 快速部署

### 方案 1: Vercel (推荐)

1. 将代码推送到 GitHub
2. 访问 [vercel.com](https://vercel.com) 并导入仓库
3. 构建命令: `cd apps/web && npm run build`
4. 输出目录: `apps/web/dist`
5. 点击 Deploy

### 方案 2: Netlify

1. 将代码推送到 GitHub
2. 访问 [netlify.com](https://netlify.com) 并导入仓库
3. 构建命令: `cd apps/web && npm run build`
4. 发布目录: `apps/web/dist`

### 方案 3: GitHub Pages

1. 在仓库 Settings > Pages 中启用 GitHub Pages
2. 选择 GitHub Actions 作为源
3. 推送代码到 main 分支，自动部署

## 🛠️ 本地开发

```bash
cd apps/web
npm install
npm run dev
```

访问 http://localhost:3000

## 📦 构建

```bash
cd apps/web
npm run build
```

输出目录: `apps/web/dist`

## ✨ 功能特性

- 📊 多维度数据筛选（品牌、级别、动力类型、价格）
- 📈 气泡图分析（轴距 × 售价 × 销量）
- 📉 趋势图分析
- 📋 数据表格展示
- 🤖 AI 助手界面

## 📝 技术栈

- Next.js 14
- React + TypeScript
- Tailwind CSS
- ECharts
- Zustand
