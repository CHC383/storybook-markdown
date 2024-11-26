import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import Page from './page';

const meta = {
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Test Markdown Title')).toBeInTheDocument();
  },
};
