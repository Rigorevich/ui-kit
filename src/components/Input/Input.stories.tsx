import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import type { InputProps } from './Input.types';

const meta: Meta<typeof Input> = {
  component: Input,
  title: '360-feedback/Input',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    inputType: {
      control: {
        type: 'select',
        options: ['default', 'search', 'date'],
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

const View = ({ inputs }: { inputs: InputProps[] }) => {
  return (
    <div style={{ display: 'flex', gap: '1.5rem' }}>
      {inputs.map((input, index) => {
        console.log(input);
        return (
          <div key={index}>
            <span
              style={{
                display: 'block',
                textAlign: 'center',
                marginBottom: '0.5rem',
                color: '#C0D0DE',
                fontSize: '0.75rem',
              }}
            >
              {input.name}
            </span>
            <Input {...input} />
          </div>
        );
      })}
    </div>
  );
};

const inputProps = [
  {
    name: 'Text input',
    placeholder: 'Placeholder',
  },
  {
    name: 'Text input with right icon',
    placeholder: 'Placeholder',
    inputType: 'search' as InputProps['inputType'],
  },
  {
    name: 'Text input with left icon',
    placeholder: 'Placeholder',
    inputType: 'date' as InputProps['inputType'],
  },
];

export const Default: Story = {
  render: (args) => {
    const currentInput = inputProps.map((input) => ({
      ...input,
      ...args,
    }));

    return <View inputs={currentInput} />;
  },
};

export const Value: Story = {
  render: (args) => {
    const currentInput = inputProps.map((input) => ({
      ...input,
      ...args,
      value: 'Value',
    }));

    return <View inputs={currentInput} />;
  },
};

export const Disabled: Story = {
  render: (args) => {
    const currentInput = inputProps.map((input) => ({
      ...input,
      ...args,
      disabled: true,
    }));

    return <View inputs={currentInput} />;
  },
};

export const Error: Story = {
  render: (args) => {
    const currentInput = inputProps.map((input) => ({
      ...input,
      ...args,
      variant: 'error' as InputProps['variant'],
    }));

    return <View inputs={currentInput} />;
  },
};

export const ErrorDescription: Story = {
  render: (args) => {
    const currentInput = inputProps.map((input) => ({
      ...input,
      ...args,
      variant: 'error' as InputProps['variant'],
      description: 'Description',
    }));

    return <View inputs={currentInput} />;
  },
};

export const Success: Story = {
  render: (args) => {
    const currentInput = inputProps.map((input) => ({
      ...input,
      ...args,
      variant: 'success' as InputProps['variant'],
    }));

    return <View inputs={currentInput} />;
  },
};

export const SuccessDescription: Story = {
  render: (args) => {
    const currentInput = inputProps.map((input) => ({
      ...input,
      ...args,
      variant: 'success' as InputProps['variant'],
      description: 'Description',
    }));

    return <View inputs={currentInput} />;
  },
};

export const InputWithDescriptionAndLabel: Story = {
  render: (args) => {
    const currentInput = inputProps.map((input) => ({
      ...input,
      ...args,
      description: 'Description',
      label: 'Label',
    }));

    return <View inputs={currentInput} />;
  },
};
