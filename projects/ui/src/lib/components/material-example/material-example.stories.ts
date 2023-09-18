import { Meta, StoryObj } from '@storybook/angular';

import { MaterialExampleComponent } from './material-example.component';

const meta: Meta<MaterialExampleComponent> = {
  title: 'MaterialExampleComponent',
  component: MaterialExampleComponent,
  argTypes: {
    name: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<MaterialExampleComponent>;

export const Default: Story = {};
