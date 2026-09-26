import { defineConfig } from '@playwright/test';
import base from './playwright.config';
export default defineConfig({
  ...base,
  webServer: (base.webServer as import('@playwright/test').WebServerConfig[]).map((server) => ({
    ...server,
    command: server.command === 'npm run build && npm run start:standalone' ? 'npm run start:standalone' : server.command,
  })),
});
