import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { BookModule } from './modules/book/book.module';
import { CirculationModule } from './modules/circulation/circulation.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { GeneralSettingsModule } from './modules/general-settings/general-settings.module';
import { MemberModule } from './modules/member/member.module';
import { NotificationModule } from './modules/notification/notification.module';
import { FirebaseModule } from './shared/modules/firebase.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    AuthLayoutComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FirebaseModule,
    CoreModule,
    SharedModule,
    BookModule,
    CirculationModule,
    DashboardModule,
    GeneralSettingsModule,
    MemberModule,
    NotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
