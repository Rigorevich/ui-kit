import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Marbella/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    backgrounds: {
      values: [
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
  argTypes: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonWithSection: Story = {
  args: {
    children: 'Log Out',
    color: 'error',
    startSection: (
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 5.5C8 6.05 7.55 6.5 7 6.5H6V18.5H7C7.55 18.5 8 18.95 8 19.5C8 20.05 7.55 20.5 7 20.5H5C4.45 20.5 4 20.05 4 19.5V5.5C4 4.95 4.45 4.5 5 4.5H7C7.55 4.5 8 4.95 8 5.5ZM18.0039 7.9248L20.8179 11.9248C21.0679 12.2788 21.0599 12.7538 20.7999 13.0998L17.7999 17.0998C17.6039 17.3618 17.3029 17.4998 16.9989 17.4998C16.7909 17.4998 16.5799 17.4348 16.3999 17.2998C15.9579 16.9688 15.8689 16.3418 16.1999 15.9008L18.0009 13.4998H17.9999H9.9999C9.4479 13.4998 8.9999 13.0528 8.9999 12.4998C8.9999 11.9468 9.4479 11.4998 9.9999 11.4998H17.9999C18.0164 11.4998 18.0317 11.5044 18.0472 11.5089C18.0598 11.5127 18.0724 11.5165 18.0859 11.5178L16.3679 9.0748C16.0499 8.6238 16.1589 7.9998 16.6109 7.6818C17.0619 7.3628 17.6859 7.4728 18.0039 7.9248Z"
          fill="currentColor"
        ></path>
        <mask id="mask0_3802_6064" maskUnits="userSpaceOnUse" x="4" y="4" width="18" height="17">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 5.5C8 6.05 7.55 6.5 7 6.5H6V18.5H7C7.55 18.5 8 18.95 8 19.5C8 20.05 7.55 20.5 7 20.5H5C4.45 20.5 4 20.05 4 19.5V5.5C4 4.95 4.45 4.5 5 4.5H7C7.55 4.5 8 4.95 8 5.5ZM18.0039 7.9248L20.8179 11.9248C21.0679 12.2788 21.0599 12.7538 20.7999 13.0998L17.7999 17.0998C17.6039 17.3618 17.3029 17.4998 16.9989 17.4998C16.7909 17.4998 16.5799 17.4348 16.3999 17.2998C15.9579 16.9688 15.8689 16.3418 16.1999 15.9008L18.0009 13.4998H17.9999H9.9999C9.4479 13.4998 8.9999 13.0528 8.9999 12.4998C8.9999 11.9468 9.4479 11.4998 9.9999 11.4998H17.9999C18.0164 11.4998 18.0317 11.5044 18.0472 11.5089C18.0598 11.5127 18.0724 11.5165 18.0859 11.5178L16.3679 9.0748C16.0499 8.6238 16.1589 7.9998 16.6109 7.6818C17.0619 7.3628 17.6859 7.4728 18.0039 7.9248Z"
            fill="white"
          ></path>
        </mask>
        <g mask="url(#mask0_3802_6064)">
          <rect y="0.5" width="24" height="24" fill="current"></rect>
        </g>
      </svg>
    ),
  },
};

export const DefaultButton: Story = {
  args: {
    children: 'Click me',
  },
};
