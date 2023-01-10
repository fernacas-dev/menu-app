import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Business } from 'src/app/applications/admin/models/business.model';
import { MenusService } from 'src/app/applications/admin/services/menus.service';
import { AddFormComponent } from 'src/app/applications/shared/components/add-form/add-form.component';

@Component({
  selector: 'app-menus-form-add',
  templateUrl: './menus-form-add.component.html',
  styleUrls: ['./menus-form-add.component.css']
})
export class MenusFormAddComponent extends AddFormComponent {

  @Input() formTitle: string = '';
  @Input() business: Business[] = [];

  constructor(formBuilder: FormBuilder, menusService: MenusService){
    super(formBuilder, menusService);
  }

  override buildForm(){
    this.form = this.formBuilder?.group({
      name: ['', [Validators.required]],
      businessId: ['', [Validators.required]],
    });
  }

  override mapForm(item: any){
    return {
      name: item.name,
      businessId: item.categoryId,
    };
  }

}
