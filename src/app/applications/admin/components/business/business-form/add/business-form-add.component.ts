import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/applications/admin/models/category.model';
import { BusinessService } from 'src/app/applications/admin/services/business.service';
import { AddFormComponent } from 'src/app/applications/shared/components/add-form/add-form.component';


@Component({
  selector: 'app-business-form-add',
  templateUrl: './business-form-add.component.html',
  styleUrls: ['./business-form-add.component.css']
})
export class BusinessFormAddComponent extends AddFormComponent {

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
    return {
      userOwnerId: item.userOwnerId,
      name: item.name,
      categoryId: item.categoryId,
    };
  }

}
