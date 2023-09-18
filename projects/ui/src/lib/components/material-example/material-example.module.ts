import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { MaterialExampleComponent } from './material-example.component';

@NgModule({
  declarations: [MaterialExampleComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [MaterialExampleComponent],
})
export class MaterialExampleModule {}
