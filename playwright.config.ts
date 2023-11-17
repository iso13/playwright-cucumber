// playwright.config.ts

import { devices } from 'playwright';

module.exports = {
  projects: [
    // Configuration for Chromium
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
      browserName: 'chromium',
      launchOptions: {
        executablePath: '/path/to/chromium',
      },
    },
    // Additional configurations for other browsers can be added here
  ],
};
