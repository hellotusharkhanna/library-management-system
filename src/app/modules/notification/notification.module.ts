import { NgModule } from '@angular/core';
import { NotificationRoutingModule } from './notification.routes';
import { EmailSettingsPageComponent } from './pages/email-settings-page/email-settings-page.component';
import { NotifyDelayedMembersPageComponent } from './pages/notify-delayed-members-page/notify-delayed-members-page.component';
import { SmsSettingsPageComponent } from './pages/sms-settings-page/sms-settings-page.component';

@NgModule({
  declarations: [
    SmsSettingsPageComponent,
    EmailSettingsPageComponent,
    NotifyDelayedMembersPageComponent
  ],
  imports: [NotificationRoutingModule]
})
export class NotificationModule {}
