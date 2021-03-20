// jest.config.ts
import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '\\.(js|ts)$': 'ts-jest',
  },
  modulePathIgnorePatterns: ['/performance/'],
  collectCoverage: true,
};
export default config;