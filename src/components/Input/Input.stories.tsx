import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Marbella/InputField',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      defaultValue: 'medium',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => <Input data-testId="InputField-id" {...args} />,
};
Default.args = {
  placeholder: 'Placeholder',
  variant: 'error',
  description: 'Description',
  label: 'Label',
};
