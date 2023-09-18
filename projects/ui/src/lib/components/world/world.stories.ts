import { Meta, StoryObj } from '@storybook/angular';

import { WorldComponent } from './world.component';

const meta: Meta<WorldComponent> = {
  title: 'WorldComponent',
  component: WorldComponent,
  argTypes: {
    name: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<WorldComponent>;

export const Default: Story = {};
