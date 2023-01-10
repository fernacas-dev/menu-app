import { Component, OnInit } from '@angular/core';
import { filter, take } from 'rxjs';
import { CrudComponent } from 'src/app/applications/shared/components/crud/crud.component';
import { Business } from '../../models/business.model';
import { BusinessService } from '../../services/business.service';
import { MenusService } from '../../services/menus.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent extends CrudComponent  {

  override headTable: any[] = [
    'Id',
    'Business Id',
    'Name',
    'Actions'
  ];

  business: Business[] = [];

  constructor(private businessService: BusinessService){
    super(MenusService);
  }

  override ngOnInit(): void {
    this.getListSubscribe();
    this.createSubscribe();
    this.updateSubscribe();
    this.deleteSubscribe();
    this.getBusinessSubscribe();
  }

  override mapFunction(item: any): any {

    const business = this.business?.filter(x => x.$id === item.businessId);
    if(business.length > 0){
      console.log(`business: ${JSON.stringify(business)}`);

      return {
        $id: item.$id,
        userOwnerId: item.userOwnerId,
        name: item.name,
        businessId: business[0]?.name,
      };
    }

    return {};
  }

  mapBusiness(business: any){
    return {$id: business.$id, name: business.name}
  }


  getBusinessSubscribe(){
    this.businessService.list$.pipe(
      take(1),
      filter(x => x !== null),
    ).subscribe((business: Business[]) => {

      this.business = business.map(
        (business: Business) => this.mapBusiness(business)
      )
    })

    this.businessService.get();
  }
}
