import { Component, Input } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Business } from 'src/app/applications/admin/models/business.model';
import { MenusService } from 'src/app/applications/admin/services/menus.service';
import { EditFormComponent } from 'src/app/applications/shared/components/edit-form/edit-form.component';

@Component({
  selector: 'app-menus-form-edit',
  templateUrl: './menus-form-edit.component.html',
  styleUrls: ['./menus-form-edit.component.css']
})
export class MenusFormEditComponent extends EditFormComponent{

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
      businessId: item.businessId,
      $id: this.data?.$id
    };
  }
}
