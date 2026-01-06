import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/test'],
  testMatch: ['**/*.spec.ts', '**/*.e2e-spec.ts'],
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  clearMocks: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/app.ts',        
    '!src/server.ts',      
    '!src/**/swagger.config.ts',
    '!src/**/index.ts',
    '!src/lib/prisma.ts',
    '!src/**/context.ts',
    '!src/**/schema.ts'
  ],
};

module.exports = config;
