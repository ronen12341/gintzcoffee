@echo off
title Publish to gintz.co.il

cd /d "C:\Users\user\Dropbox\My PC (HASH-GINTZ)\Desktop\gintzcoffe-main\gintzcoffe-main"

echo.
echo ========================================
echo   Publishing changes to gintz.co.il
echo ========================================
echo.

echo [1/3] Adding changes...
call git add .
echo.

echo [2/3] Saving commit...
call git commit -m "Update site"
echo.

echo [3/3] Pushing to GitHub...
call git push
echo.

echo ========================================
echo   DONE! Site will update in 1-2 minutes.
echo   (If you see errors above - send a screenshot)
echo ========================================
echo.

pause
