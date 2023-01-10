import { Component, Input } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { CategoriesService } from 'src/app/applications/admin/services/categories.service';
import { EditFormComponent } from 'src/app/applications/shared/components/edit-form/edit-form.component';

@Component({
  selector: 'app-categories-form-edit',
  templateUrl: './categories-form-edit.component.html',
  styleUrls: ['./categories-form-edit.component.css']
})
export class CategoriesFormEditComponent extends EditFormComponent{

  @Input() formTitle: string = '';

  constructor(formBuilder: FormBuilder, categoriesService: CategoriesService){
    super(formBuilder, categoriesService);
  }

}
