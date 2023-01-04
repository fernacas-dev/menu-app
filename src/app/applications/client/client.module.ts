import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { ClientRoutingModule } from './client-routing.module';

@NgModule({
  declarations: [
    IndexComponent,
    ClientLayoutComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  exports: [
    IndexComponent,
    ClientLayoutComponent,
  ]
})
export class ClientModule { }
