@echo off
echo ========================================
echo Jack & Jill Toys - GitHub Deployment
echo ========================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Python is not installed or not in PATH
    echo Please install Python from https://python.org
    pause
    exit /b 1
)

REM Run the deployment script
echo Running deployment script...
echo.

python deploy_to_github.py

echo.
echo Deployment script completed.
pause 