import { NgModule } from '@angular/core';
import { MemberRoutingModule } from './member.routes';
import { GenerateMemberCardComponent } from './pages/generate-member-card/generate-member-card.component';
import { MemberPageComponent } from './pages/member-page/member-page.component';
import { MemberTypePageComponent } from './pages/member-type-page/member-type-page.component';

@NgModule({
  declarations: [
    MemberPageComponent,
    MemberTypePageComponent,
    GenerateMemberCardComponent
  ],
  imports: [MemberRoutingModule]
})
export class MemberModule {}
