import type { Meta, StoryObj } from '@storybook/react';

import { Tabs, TabPanel } from './';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'Marbella/Tabs',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Tabs>;

const TabsTemplate = () => {
  return (
    <Tabs>
      <TabPanel title="Reviews">
        <div>Reviews</div>
      </TabPanel>
      <TabPanel title="Plans">
        <div>Premium</div>
      </TabPanel>
    </Tabs>
  );
};
export const Template: Story = {
  render: () => <TabsTemplate />,
};
