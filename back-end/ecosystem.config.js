module.exports = {
  apps: [{
    name: "todo-app",
    script: "./pm2-start.js",
    watch: true,
    ignore_watch: ["node_modules", "logs"],
    autorestart: true,
    max_memory_restart: "300M",
    restart_delay: 3000,
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    },
    log_date_format: "DD-MM-YYYY HH:mm:ss"
  }]
};