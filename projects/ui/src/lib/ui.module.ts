import { NgModule } from '@angular/core';

import { UiComponent } from './ui.component';
import { HelloComponent } from './components/hello/hello.component';

@NgModule({
  declarations: [UiComponent, HelloComponent],
  imports: [],
  exports: [UiComponent],
})
export class UiModule {}
