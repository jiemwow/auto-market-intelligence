#!/bin/bash

# 中国汽车市场智能分析平台 - Mac 开发模式启动脚本

echo "🚗 启动中国汽车市场智能分析平台（开发模式）..."

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ 请先安装 Node.js (建议 v18+): https://nodejs.org"
    exit 1
fi

echo "✅ Node.js 版本: $(node -v)"

# 进入项目目录
cd "$(dirname "$0")/apps/web" || exit 1

# 安装依赖
if [ ! -d "node_modules" ]; then
    echo "📦 安装依赖..."
    npm install
fi

# 启动开发服务器（不是静态导出）
echo "🚀 启动开发服务器..."
echo ""
echo "⏳ 请等待..."
echo ""

npm run dev
