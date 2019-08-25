import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard.routes';
import { BarChartComponent } from './pages/bar-chart/bar-chart.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { InfoCardComponent } from './pages/info-card/info-card.component';
import { PieChartComponent } from './pages/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    PieChartComponent,
    InfoCardComponent,
    BarChartComponent
  ],
  imports: [DashboardRoutingModule]
})
export class DashboardModule {}
