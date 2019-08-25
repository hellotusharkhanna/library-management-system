import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout.routes';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ContentComponent } from './shared/components/content/content.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    LayoutPageComponent
  ],
  imports: [LayoutRoutingModule]
})
export class LayoutModule {}
