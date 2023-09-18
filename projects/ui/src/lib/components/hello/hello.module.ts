import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HelloComponent } from './hello.component';

@NgModule({
  declarations: [HelloComponent],
  imports: [CommonModule],
  exports: [HelloComponent],
})
export class HelloModule {}
