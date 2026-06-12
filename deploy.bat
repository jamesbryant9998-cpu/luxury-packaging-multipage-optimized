@echo off
:: Windows 一键自动部署脚本 (免填 URL 终极版)
echo ===================================================
echo [LuxuryPack] Welcome to One-Click GitHub and Vercel Deployer!
echo ===================================================
echo.

:: 检查本地是否安装 git
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Git client was not found on your host machine!
    echo Please install Git or double check your environment paths.
    pause
    exit /b 1
)

:: Git 初始化与首次提交
echo [1/3] Preparing local Git repository...
git init

:: 自动检测 Clash (7890)、v2ray (10809) 或者是常见代理端口 (1080) 并自动为当前 Git 仓库应用临时代理
echo [INFO] Auditing local network environment for active proxy ports...
netstat -ano | findstr 127.0.0.1:7890 >nul 2>&1
if %errorlevel% equ 0 (
    echo [INFO] Detected active Clash proxy on 7890! Configuring temporary Git proxy...
    git config --local http.proxy http://127.0.0.1:7890
    git config --local https.proxy http://127.0.0.1:7890
) else (
    netstat -ano | findstr 127.0.0.1:10809 >nul 2>&1
    if %errorlevel% equ 0 (
        echo [INFO] Detected active v2ray proxy on 10809! Configuring temporary Git proxy...
        git config --local http.proxy http://127.0.0.1:10809
        git config --local https.proxy http://127.0.0.1:10809
    ) else (
        netstat -ano | findstr 127.0.0.1:1080 >nul 2>&1
        if %errorlevel% equ 0 (
            echo [INFO] Detected active proxy on 1080! Configuring temporary Git proxy...
            git config --local http.proxy http://127.0.0.1:1080
            git config --local https.proxy http://127.0.0.1:1080
        )
    )
)

git add .
git commit -m "Initialize Luxury Packaging Multipage Optimized B2B Website" --allow-empty

:: 绑定已经为您全自动创建好的云端 GitHub 仓库！
git remote remove origin >nul 2>&1
git remote add origin https://github.com/jamesbryant9998-cpu/luxury-packaging-multipage-optimized.git
git branch -M main

echo.
echo [2/3] Pushing your codebase to GitHub main branch...
echo (If a GitHub login popup appears, please click "Authorize" to proceed.)
echo.
git push -u origin main --force

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Push failed! Please verify:
    echo 1. Your internet connection is active.
    echo 2. You have proper credentials/permissions set up on your GitHub account.
    pause
    exit /b 1
)

echo.
echo ===================================================
echo [3/3] SUCCESS! Codebase successfully pushed to GitHub!
echo ===================================================
echo.
echo NEXT STEPS FOR GOING LIVE ON VERCEL:
echo 1. Go to Vercel (https://vercel.com) and sign in.
echo 2. Click "Add New" -> "Project" -> "Import" the repository:
echo    "jamesbryant9998-cpu/luxury-packaging-multipage-optimized"
echo 3. Click "Deploy" and watch your premium B2B store go live!
echo ===================================================
echo.
pause
