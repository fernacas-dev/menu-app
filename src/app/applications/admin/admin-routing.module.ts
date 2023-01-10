import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './components/business/business.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuItemsComponent } from './components/menu-items/menu-items.component';
import { MenusComponent } from './components/menus/menus.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'business',
        component: BusinessComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'menus',
        component: MenusComponent,
      },
      {
        path: 'menu-items',
        component: MenuItemsComponent,
      },
      {
        path: 'profile',
        component: IndexComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
