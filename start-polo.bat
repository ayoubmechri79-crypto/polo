@echo off
title POLO AI Bot
echo Starting POLO AI Bot...
cd /d "C:\Users\LENOVO\Downloads\POLO"
C:\Users\LENOVO\AppData\Roaming\npm\pm2.cmd resurrect
if errorlevel 1 (
    C:\Users\LENOVO\AppData\Roaming\npm\pm2.cmd start ecosystem.config.js
)
echo POLO is running!
echo Backend: http://localhost:3001
echo Frontend: http://localhost:5173
echo.
echo Close this window after confirming.
timeout /t 10