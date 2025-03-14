const { execSync } = require('child_process');

try {
  console.log('Setting up database...');
  execSync('npm run create', { stdio: 'inherit' });
  execSync('npm run migrate', { stdio: 'inherit' });
  
  // Optional: add seed data
  // execSync('npm run seed', { stdio: 'inherit' });
  
  console.log('Database setup complete. Starting server...');
} catch (error) {
  console.error('Database setup failed:', error.message);
  process.exit(1);
}

require('./src/server');
