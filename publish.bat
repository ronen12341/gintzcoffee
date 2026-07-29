@echo off
setlocal
title Publish to gintz.co.il

cd /d "%~dp0"

echo.
echo ========================================
echo   Publishing approved changes to gintz.co.il
echo ========================================
echo.

echo [1/4] Cleaning previous file selection...
call git reset
if errorlevel 1 goto :error
echo.

echo [2/4] Adding approved website files only...
call git add src public AGENTS.md CLAUDE.md .gitignore publish.bat
if errorlevel 1 goto :error
echo.

call git diff --cached --quiet
if not errorlevel 1 goto :nothing

echo [3/4] Saving changes...
call git commit -m "Update site"
if errorlevel 1 goto :error
echo.

echo [4/4] Publishing to GitHub...
call git push origin main
if errorlevel 1 goto :error
echo.

echo ========================================
echo   SUCCESS! Site will update shortly.
echo ========================================
echo.
pause
exit /b 0

:nothing
echo.
echo ========================================
echo   Nothing new to publish.
echo ========================================
echo.
pause
exit /b 0

:error
echo.
echo ========================================
echo   PUBLISH FAILED - nothing was confirmed.
echo   Please send a screenshot of this window.
echo ========================================
echo.
pause
exit /b 1
