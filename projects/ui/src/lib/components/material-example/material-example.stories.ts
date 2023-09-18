import { MatButtonModule } from '@angular/material/button';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { MaterialExampleComponent } from './material-example.component';

const meta: Meta<MaterialExampleComponent> = {
  title: 'MaterialExampleComponent',
  component: MaterialExampleComponent,
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule],
    }),
  ],
  argTypes: {
    name: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<MaterialExampleComponent>;

export const Default: Story = {};
