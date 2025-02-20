import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';
import { storybookNextJsPlugin } from '@storybook/experimental-nextjs-vite/vite-plugin';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    // See options at: https://storybook.js.org/docs/writing-tests/vitest-plugin#storybooktest
    storybookTest({ configDir: '.storybook' }),
    // More info at: https://github.com/storybookjs/vite-plugin-storybook-nextjs
    storybookNextJsPlugin(),
  ],
  test: {
    name: 'storybook',
    browser: {
      enabled: true,
      headless: true,
      name: 'chromium',
      provider: 'playwright',
    },
    // Make sure to adjust this pattern to match your stories files.
    include: ['src/**/*.stories.?(m)[jt]s?(x)'],
    setupFiles: ['.storybook/vitest.setup.ts'],
  },
});
