import { defineConfig } from '@playwright/test';
import base from './playwright.config';
const servers = base.webServer;
if (!Array.isArray(servers)) throw new Error('Expected the project server array');
export default defineConfig({
  ...base,
  webServer: servers.map((server) => ({
    ...server,
    command: server.command === 'npm run build && npm run start:standalone' ? 'npm run start:standalone' : server.command,
  })),
});
