import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminRoutingModule } from './admin-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { BusinessComponent } from './components/business/business.component';
import { MenusComponent } from './components/menus/menus.component';
import { MenuItemsComponent } from './components/menu-items/menu-items.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BusinessFormAddComponent } from './components/business/business-form/add/business-form-add.component';
import { BusinessFormEditComponent } from './components/business/business-form/edit/business-form-edit.component';
import { CategoriesFormAddComponent } from './components/categories/categories-form/add/categories-form-add.component';
import { CategoriesFormEditComponent } from './components/categories/categories-form/edit/categories-form-edit.component';
import { MenusFormAddComponent } from './components/menus/menus-form/add/menus-form-add.component';
import { MenusFormEditComponent } from './components/menus/menus-form/edit/menus-form-edit.component';
import { MenuItemsFormAddComponent } from './components/menu-items/menu-item-form/add/menu-items-form-add.component';
import { MenuItemsFormEditComponent } from './components/menu-items/menu-item-form/edit/menu-items-form-edit.component';

@NgModule({
  declarations: [
   AdminLayoutComponent,
   IndexComponent,
   BusinessComponent,
   MenusComponent,
   MenuItemsComponent,
   CategoriesComponent,
   DashboardComponent,
   CategoriesFormAddComponent,
   CategoriesFormEditComponent,
   BusinessFormAddComponent,
   BusinessFormEditComponent,
   MenusFormAddComponent,
   MenusFormEditComponent,
   MenuItemsFormAddComponent,
   MenuItemsFormEditComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [
    AdminLayoutComponent,
  ]
})
export class AdminModule { }
