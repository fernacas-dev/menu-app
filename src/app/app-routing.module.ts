import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './applications/shared/pages/login/login.component';
import { RegisterComponent } from './applications/shared/pages/register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'client',
    loadChildren: () => import('./applications/client/client.module').then(m => m.ClientModule),
    data: { preload: true },
  },
  {
    path: 'admin',
    loadChildren: () => import('./applications/admin/admin.module').then(m => m.AdminModule),
    data: { preload: true },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
