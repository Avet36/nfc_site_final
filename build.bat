@echo off
REM Build and serve the project locally (Windows)
cd /d %~dp0
echo Installing dependencies...
npm install || goto :err
echo Building production bundle...
npm run build || goto :err
echo Starting static server at http://localhost:5000
start "" npx serve -s dist -l 5000
start "" http://localhost:5000
exit /b 0
:err
echo ERROR: command failed. Fix the output above and retry.
exit /b 1
