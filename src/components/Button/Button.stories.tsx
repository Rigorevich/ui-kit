import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Marbella/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (args) => <Button data-testId="InputField-id" {...args} />,
};

Primary.args = {
  buttonType: "primary",
  text: "Click me",
};

export const Secondary: Story = {
  render: (args) => <Button data-testId="InputField-id" {...args} />,
};

Secondary.args = {
  buttonType: "secondary",
  text: "Click me",
};

export const Error: Story = {
  render: (args) => <Button data-testId="InputField-id" {...args} />,
};

Error.args = {
  buttonType: "error",
  text: "Click me",
};
