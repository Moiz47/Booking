@echo off

start "Node Server" cmd /k "nodemon index.js"
start "Next.js App" cmd /k "cd /d .\my-app && npm run dev"
