import { NgModule } from '@angular/core';
import { GeneralSettingsRoutingModule } from './general-settings.routes';
import { GeneralSettingsPageComponent } from './pages/general-settings-page/general-settings-page.component';

@NgModule({
  declarations: [GeneralSettingsPageComponent],
  imports: [GeneralSettingsRoutingModule]
})
export class GeneralSettingsModule {}
