import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminRoutingModule } from './admin-routing.module';
import { IndexComponent } from './pages/index/index.component';

@NgModule({
  declarations: [
   AdminLayoutComponent,
   IndexComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    AdminLayoutComponent,
  ]
})
export class AdminModule { }
