import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoggedGuardGuard } from './applications/shared/guards/user-logged-guard.guard';
import { LoginComponent } from './applications/shared/pages/login/login.component';
import { LogoutComponent } from './applications/shared/pages/logout/logout.component';
import { RegisterComponent } from './applications/shared/pages/register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'client',
    loadChildren: () => import('./applications/client/client.module').then(m => m.ClientModule),
    canActivate: [UserLoggedGuardGuard],
    data: { preload: true },
  },
  {
    path: 'admin',
    loadChildren: () => import('./applications/admin/admin.module').then(m => m.AdminModule),
    data: { preload: true },
    canActivate: [UserLoggedGuardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
