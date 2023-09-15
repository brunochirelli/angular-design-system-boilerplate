import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { TesteComponent } from './teste/teste.component';



@NgModule({
  declarations: [
    UiComponent,
    TesteComponent
  ],
  imports: [
  ],
  exports: [
    UiComponent
  ]
})
export class UiModule { }
