import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { throwIfAlreadyLoaded } from './guards/module-import.guard';
import { NoAuthGuard } from './guards/no-auth.guard';
import { TimingInterceptor } from './interceptors/timing.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule],
  providers: [
    AuthGuard,
    NoAuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
