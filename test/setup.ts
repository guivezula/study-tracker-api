import { execSync } from 'child_process';

process.env.NODE_ENV = 'test';
process.env.DATABASE_URL = 'file:./test.db';

beforeAll(() => {
  execSync('npx prisma db push', {
    stdio: 'inherit',
    env: {
      ...process.env,
      DATABASE_URL: 'file:./test.db',
    },
  });
});
