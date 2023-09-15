import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { TesteComponent } from './teste.component';

@NgModule({
  declarations: [TesteComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [TesteComponent],
})
export class TesteModule {}
