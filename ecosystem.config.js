module.exports = {
  apps: [
    {
      name: 'polo-backend',
      cwd: './backend',
      script: 'server.js',
      watch: false,
      max_memory_restart: '500M',
      min_uptime: '10s',
      max_restarts: 50,
      restart_delay: 3000,
      kill_timeout: 5000,
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      }
    },
    {
      name: 'polo-frontend',
      cwd: './frontend',
      script: 'node',
      args: './node_modules/vite/bin/vite.js --host 0.0.0.0 --port 5173',
      watch: false,
      max_memory_restart: '300M',
      min_uptime: '10s',
      max_restarts: 50,
      restart_delay: 3000,
      kill_timeout: 5000,
      env: {
        NODE_ENV: 'development'
      }
    }
  ]
};
