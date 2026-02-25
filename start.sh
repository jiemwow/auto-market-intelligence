#!/bin/bash

# 中国汽车市场智能分析平台 - 完整启动脚本
# 这个脚本会自动安装依赖并启动项目

echo "🚗 中国汽车市场智能分析平台"
echo "================================"

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ 请先安装 Node.js (v18+): https://nodejs.org"
    exit 1
fi

echo "✅ Node.js 版本: $(node -v)"

# 进入项目目录
cd "$(dirname "$0")/apps/web" || exit 1

# 检查是否需要安装依赖
if [ ! -d "node_modules" ]; then
    echo ""
    echo "📦 正在安装依赖..."
    echo "⏳ 这可能需要 1-2 分钟，请耐心等待..."
    echo ""
    
    # 使用 npm ci 如果存在 package-lock.json
    if [ -f "package-lock.json" ]; then
        npm ci
    else
        npm install
    fi
    
    if [ $? -ne 0 ]; then
        echo "❌ 依赖安装失败，请检查网络连接"
        exit 1
    fi
    
    echo "✅ 依赖安装完成"
    echo ""
fi

# 启动开发服务器
echo "🚀 正在启动开发服务器..."
echo ""
echo "⏳ 请等待服务器启动..."
echo ""

npm run dev

# 如果启动失败，显示错误信息
if [ $? -ne 0 ]; then
    echo ""
    echo "❌ 启动失败，尝试重新安装依赖..."
    echo ""
    rm -rf node_modules package-lock.json
    npm install
    npm run dev
fi
