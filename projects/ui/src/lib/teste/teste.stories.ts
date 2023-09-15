import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { TesteComponent } from './teste.component';
import { TesteModule } from './teste.module';

const meta: Meta<TesteComponent> = {
  title: 'TesteComponent',
  component: TesteComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [TesteModule],
    }),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<TesteComponent>;

export const Default: Story = {};
