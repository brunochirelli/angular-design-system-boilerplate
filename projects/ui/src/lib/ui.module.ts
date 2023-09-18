import { NgModule } from '@angular/core';

import { HelloComponent } from './components/hello/hello.component';
import { UiComponent } from './ui.component';

@NgModule({
  declarations: [UiComponent, HelloComponent],
  imports: [],
  exports: [UiComponent],
})
export class UiModule {}
