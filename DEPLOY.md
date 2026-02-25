# 部署指南

## 🌐 当前部署地址

### Vercel（已部署）
- **预览地址**: https://skill-deploy-riix6sfq9c-agent-skill-vercel.vercel.app
- **认领地址**: https://vercel.com/claim-deployment?code=3e4b8c8e-f1e0-4004-a9bd-5da16b952674

**注意**: 这是一个临时预览部署。要获得永久域名，请按以下步骤操作。

---

## 🚀 配置自动部署

### 方案 1: Vercel（推荐）

#### 步骤 1: 创建 Vercel 项目
1. 访问 https://vercel.com
2. 点击 **Add New Project**
3. 导入 `jiemwow/auto-market-intelligence` 仓库

#### 步骤 2: 配置构建设置
- **Framework Preset**: Next.js
- **Build Command**: `cd apps/web && npm run build`
- **Output Directory**: `apps/web/dist`
- **Install Command**: `npm install`

#### 步骤 3: 部署
点击 **Deploy**，等待构建完成。

#### 步骤 4: 自定义域名（可选）
1. 在 Vercel 项目设置中点击 **Domains**
2. 添加你的自定义域名
3. 按提示配置 DNS

---

### 方案 2: Netlify

#### 步骤 1: 创建 Netlify 项目
1. 访问 https://netlify.com
2. 点击 **Add new site** > **Import an existing project**
3. 选择 GitHub 仓库

#### 步骤 2: 配置构建设置
- **Build Command**: `cd apps/web && npm run build`
- **Publish Directory**: `apps/web/dist`

#### 步骤 3: 部署
点击 **Deploy site**。

---

### 方案 3: GitHub Pages（已配置）

已在 `.github/workflows/deploy.yml` 中配置，启用方式：

1. 访问 https://github.com/jiemwow/auto-market-intelligence/settings/pages
2. **Source** 选择 **GitHub Actions**
3. 推送代码到 main 分支会自动触发部署

---

## 🔧 配置 GitHub Secrets（用于自动部署）

如果你要使用 GitHub Actions 自动部署到 Vercel，需要配置以下 Secrets：

1. 访问 https://github.com/jiemwow/auto-market-intelligence/settings/secrets/actions
2. 添加以下 Secrets：
   - `VERCEL_TOKEN`: 从 https://vercel.com/account/tokens 获取
   - `VERCEL_ORG_ID`: 你的 Vercel 组织 ID
   - `VERCEL_PROJECT_ID`: 你的 Vercel 项目 ID

---

## 📋 部署状态

| 平台 | 状态 | 域名 |
|------|------|------|
| Vercel 预览 | ✅ 已部署 | https://skill-deploy-riix6sfq9c-agent-skill-vercel.vercel.app |
| Vercel 生产 | ⏳ 待配置 | - |
| Netlify | ⏳ 待配置 | - |
| GitHub Pages | ⏳ 待启用 | - |

---

## 📝 手动部署

如果自动部署失败，可以手动部署：

```bash
cd apps/web
npm install
npm run build
# 然后使用 Vercel CLI 或 Netlify CLI 部署
npx vercel --prod dist
# 或
npx netlify deploy --prod --dir=dist
```
