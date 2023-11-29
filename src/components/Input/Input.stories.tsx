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
  placeholder: 'Search Email...',
};

export const Success: Story = {
  render: (args) => <Input data-testId="InputField-id" {...args} />,
};
Success.args = {
  placeholder: 'Search Email...',
  variant: 'success',
  disabled: false,
};

export const Error: Story = {
  render: (args) => <Input data-testId="InputField-id" {...args} />,
};
Error.args = {
  placeholder: 'Search Email...',
  variant: 'error',
  disabled: false,
};

export const Disabled: Story = {
  render: (args) => <Input data-testId="InputField-id" {...args} />,
};
Disabled.args = {
  placeholder: 'Search Email...',
  disabled: true,
};
