@echo off
cd /d "C:\Users\LENOVO\Downloads\POLO"
C:\Users\LENOVO\AppData\Roaming\npm\pm2.cmd resurrect
if errorlevel 1 (
    C:\Users\LENOVO\AppData\Roaming\npm\pm2.cmd start ecosystem.config.js
)
