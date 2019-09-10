import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { BookModule } from './modules/book/book.module';
import { CirculationModule } from './modules/circulation/circulation.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { GeneralSettingsModule } from './modules/general-settings/general-settings.module';
import { MemberModule } from './modules/member/member.module';
import { NotificationModule } from './modules/notification/notification.module';
import { FirebaseModule } from './shared/modules/firebase.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FirebaseModule,
    CoreModule,
    LayoutModule,
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
