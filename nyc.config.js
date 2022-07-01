module.exports = {
  all: true,
  exclude: [
    'src/tests',
    'src/database/migrations',
    'src/database/seeders',
    'src/database/config/config.js',
    'src/database/models/index.js',
    'utils/taskDoc.js',
  ],
  include: ['src/**/*.js'],
};
