import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth.routes';
import { LoginPageComponent } from './pages/login/login-page.component';
import { RegisterPageComponent } from './pages/register/register-page.component';

@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent],
  imports: [AuthRoutingModule]
})
export class AuthModule {}
