module.exports = {
  all: true,
  exclude: [
    'src/tests',
    'src/database/migrations',
    'src/database/seeders',
    'src/database/config/config.js',
    'src/database/models/index.js',
    'src/utils',
  ],
  include: ['src/**/*.js'],
};
