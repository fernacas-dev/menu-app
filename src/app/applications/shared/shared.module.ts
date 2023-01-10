import { CUSTOM_ELEMENTS_SCHEMA, NgModule, ɵdevModeEqual } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './pages/logout/logout.component';
import { TableComponent } from './components/table/table.component';
import { ModalComponent } from './components/modal/modal.component';
import { DynamicComponentDirective } from './directives/dynamic-component.directive';
import { CrudComponent } from './components/crud/crud.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    TableComponent,
    ModalComponent,
    DynamicComponentDirective,
    CrudComponent,
    AddFormComponent,
    EditFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    TableComponent,
    ModalComponent,
    AddFormComponent,
    EditFormComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
  ]
})
export class SharedModule { }
