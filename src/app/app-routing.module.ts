import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [AuthGuard], // Should be replaced with actual auth guard
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            m => m.DashboardModule
          )
      },
      {
        path: 'book',
        loadChildren: () =>
          import('./modules/book/book.module').then(m => m.BookModule)
      },
      {
        path: 'circulation',
        loadChildren: () =>
          import('./modules/circulation/circulation.module').then(
            m => m.CirculationModule
          )
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./modules/general-settings/general-settings.module').then(
            m => m.GeneralSettingsModule
          )
      },
      {
        path: 'member',
        loadChildren: () =>
          import('./modules/member/member.module').then(m => m.MemberModule)
      },
      {
        path: 'notification',
        loadChildren: () =>
          import('./modules/notification/notification.module').then(
            m => m.NotificationModule
          )
      }
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
