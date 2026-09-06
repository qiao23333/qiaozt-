@echo off
chcp 65001 >nul
title 乌鹊南飞个人站 - 本地服务
cd /d "%~dp0"

echo ============================================
echo   乌鹊南飞个人站 - 一键启动
echo ============================================
echo.

echo [1/2] 启动写作器 Post Studio ...
start "Post Studio 写作器" cmd /k "cd /d %~dp0 && node scripts/post-studio.js"

if exist "dist\index.html" (
    echo [2/2] 检测到构建产物，启动本地预览 ...
    start "本地预览 localhost:4321" cmd /k "cd /d %~dp0 && set NODE_OPTIONS=--max-old-space-size=1024 && npx astro preview --host 127.0.0.1 --port 4321"
    echo.
    echo   写作器: http://localhost:4323
    echo   站点预览: http://localhost:4321
) else (
    echo [2/2] 未发现构建产物 dist，跳过预览。
    echo.
    echo   说明: 站点预览需要先构建。本机内存紧张时构建可能失败，
    echo   失败不代表代码有问题，推送 GitHub 后云端会自动构建。
    echo   如需本地构建: 关闭大内存应用后运行 pnpm build
    echo.
    echo   写作器: http://localhost:4323
)

echo.
echo 两个窗口保持打开才能继续访问；关闭窗口 = 停止服务。
pause
