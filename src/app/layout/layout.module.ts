import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout.routes';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    ContentLayoutComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent
  ],
  imports: [LayoutRoutingModule]
})
export class LayoutModule {}
