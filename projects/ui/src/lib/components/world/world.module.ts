import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WorldComponent } from './world.component';

@NgModule({
  declarations: [WorldComponent],
  imports: [CommonModule],
  exports: [WorldComponent],
})
export class WorldModule {}
