import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard.routes';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { BarChartComponent } from './shared/components/bar-chart/bar-chart.component';
import { InfoCardComponent } from './shared/components/info-card/info-card.component';
import { PieChartComponent } from './shared/components/pie-chart/pie-chart.component';



@NgModule({
  declarations: [
    DashboardPageComponent,
    PieChartComponent,
    InfoCardComponent,
    BarChartComponent
  ],
  imports: [DashboardRoutingModule]
})
export class DashboardModule { }
