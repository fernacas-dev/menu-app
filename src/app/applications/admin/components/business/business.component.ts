import { Component } from '@angular/core';
import { filter, take } from 'rxjs';
import { CrudComponent } from 'src/app/applications/shared/components/crud/crud.component';
import { Category } from '../../models/category.model';
import { BusinessService } from '../../services/business.service';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent extends CrudComponent{

  override headTable: any[] = [
    'Id',
    'Category Id',
    'Name',
    'UserOwnerId',
    'Actions'
  ];

  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService){
    super(BusinessService);
  }

  override ngOnInit(): void {
    this.getListSubscribe();
    this.createSubscribe();
    this.updateSubscribe();
    this.deleteSubscribe();
    this.getCategorySubscribe();
  }

  override mapFunction(item: any): any {

    const category = this.categories?.filter(x => x.$id === item.categoryId);
    if(category.length > 0){
      console.log(`category: ${JSON.stringify(category)}`);

      return {
        $id: item.$id,
        userOwnerId: item.userOwnerId,
        name: item.name,
        categoryId: category[0]?.name,
      };
    }

    return {};
  }

  mapCategory(category: Category){
    return {$id: category.$id, name: category.name}
  }


  getCategorySubscribe(){
    this.categoriesService.list$.pipe(
      take(1),
      filter(x => x !== null),
    ).subscribe((categories: Category[]) => {

      this.categories = categories.map(
        (category: Category) => this.mapCategory(category)
      )
    })

    this.categoriesService.get();
  }
}
