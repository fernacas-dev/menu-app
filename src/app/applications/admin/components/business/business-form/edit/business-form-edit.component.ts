import { Component, Input } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Category } from 'src/app/applications/admin/models/category.model';
import { BusinessService } from 'src/app/applications/admin/services/business.service';
import { EditFormComponent } from 'src/app/applications/shared/components/edit-form/edit-form.component';


@Component({
  selector: 'app-business-form-edit',
  templateUrl: './business-form-edit.component.html',
  styleUrls: ['./business-form-edit.component.css']
})
export class BusinessFormEditComponent extends EditFormComponent{

  @Input() formTitle: string = '';
  @Input() categories: Category[] = [];

  constructor(formBuilder: FormBuilder, businessService: BusinessService){
    super(formBuilder, businessService);
  }

  override buildForm(){
    this.form = this.formBuilder?.group({
      userOwnerId: ['', [Validators.required]],
      name: ['', [Validators.required]],
      categoryId: ['', [Validators.required]],
    });

  }

  override mapForm(item: any){
    console.log(`mapForm hijo`)
    return {
      userOwnerId: item.userOwnerId,
      name: item.name,
      categoryId: item.categoryId,
      $id: this.data?.$id
    };
  }
}
