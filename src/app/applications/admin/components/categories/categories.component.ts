import { Component } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { CrudComponent } from 'src/app/applications/shared/components/crud/crud.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent extends CrudComponent {

  override headTable: any[] = [
    'Id',
    'Name',
    'Actions'
  ];

  constructor(){
    super(CategoriesService);
  }

}
