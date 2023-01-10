import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CategoriesService } from 'src/app/applications/admin/services/categories.service';
import { AddFormComponent } from 'src/app/applications/shared/components/add-form/add-form.component';

@Component({
  selector: 'app-categories-form-add',
  templateUrl: './categories-form-add.component.html',
  styleUrls: ['./categories-form-add.component.css']
})
export class CategoriesFormAddComponent extends AddFormComponent {

  @Input() formTitle: string = '';

  constructor(formBuilder: FormBuilder, categoriesService: CategoriesService){
    super(formBuilder, categoriesService);
  }

}
