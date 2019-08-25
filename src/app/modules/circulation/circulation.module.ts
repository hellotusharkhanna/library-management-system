import { NgModule } from '@angular/core';
import { CirculationRoutingModule } from './circulation.routes';
import { CirculationSettingsPageComponent } from './pages/circulation-settings-page/circulation-settings-page.component';
import { IssueReturnPageComponent } from './pages/issue-return-page/issue-return-page.component';

@NgModule({
  declarations: [CirculationSettingsPageComponent, IssueReturnPageComponent],
  imports: [CirculationRoutingModule]
})
export class CirculationModule {}
