#!/bin/bash
# macOS / Linux 一键自动部署脚本 (免填 URL 终极版)
echo "==================================================="
echo "[LuxuryPack] Welcome to One-Click GitHub and Vercel Deployer!"
echo "==================================================="
echo ""

# 检查本地是否安装 git
if ! command -v git &> /dev/null; then
    echo "[ERROR] Git client was not found on your host machine!"
    echo "Please install Git or double check your environment paths."
    exit 1
fi

# Git 初始化与首次提交
echo "[1/3] Preparing local Git repository..."
git init
git add .
git commit -m "Initialize Luxury Packaging Multipage Optimized B2B Website" --allow-empty

# 绑定已经为您全自动创建好的云端 GitHub 仓库！
git remote remove origin &> /dev/null
git remote add origin https://github.com/jamesbryant9998-cpu/luxury-packaging-multipage-optimized.git
git branch -M main

echo ""
echo "[2/3] Pushing your codebase to GitHub main branch..."
echo "(If a browser login prompt appears, please authorize to complete push.)"
echo ""
git push -u origin main --force

if [ $? -ne 0 ]; then
    echo ""
    echo "[ERROR] Push failed! Please verify internet connection and permissions."
    exit 1
fi

echo ""
echo "==================================================="
echo "[3/3] SUCCESS! Codebase successfully pushed to GitHub!"
echo "==================================================="
echo ""
echo "NEXT STEPS FOR GOING LIVE ON VERCEL:"
echo "1. Go to Vercel (https://vercel.com) and sign in."
echo "2. Click "Add New" -> "Project" -> "Import" the repository:"
echo "   "jamesbryant9998-cpu/luxury-packaging-multipage-optimized""
echo "3. Click "Deploy" and watch your premium B2B store go live!"
echo "==================================================="
echo ""
