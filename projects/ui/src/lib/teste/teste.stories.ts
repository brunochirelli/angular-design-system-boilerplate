import { Meta, StoryObj } from '@storybook/angular';
import { TesteComponent } from './teste.component';

const meta: Meta<TesteComponent> = {
  title: 'TesteComponent',
  component: TesteComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<TesteComponent>;

export const Default: Story = {};
