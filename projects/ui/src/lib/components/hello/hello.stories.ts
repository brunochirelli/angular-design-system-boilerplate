import { Meta, StoryObj } from '@storybook/angular';

import { HelloComponent } from './hello.component';

const meta: Meta<HelloComponent> = {
  title: 'HelloComponent',
  component: HelloComponent,
  argTypes: {
    name: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<HelloComponent>;

export const Default: Story = {};
