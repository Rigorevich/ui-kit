import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Marbella/InputField",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  render: (args) => <Input data-testId="InputField-id" {...args} />,
};
Primary.args = {
  error: false,
  disabled: false,
  label: "Primary",
};

export const Success: Story = {
  render: (args) => <Input data-testId="InputField-id" {...args} />,
};
Success.args = {
  error: false,
  success: true,
  disabled: false,
  label: "Success",
};

export const Error: Story = {
  render: (args) => <Input data-testId="InputField-id" {...args} />,
};
Error.args = {
  error: true,
  disabled: false,
  label: "Error",
};

export const Disabled: Story = {
  render: (args) => <Input data-testId="InputField-id" {...args} />,
};
Disabled.args = {
  disabled: true,
  label: "Disabled",
};
