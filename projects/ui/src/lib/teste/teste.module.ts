import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from './teste.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TesteComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [TesteComponent],
})
export class TesteModule {}
