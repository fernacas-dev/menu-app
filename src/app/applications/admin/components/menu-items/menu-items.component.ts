import { Component } from '@angular/core';
import { filter, take } from 'rxjs';
import { CrudComponent } from 'src/app/applications/shared/components/crud/crud.component';
import { Menus } from '../../models/menus.model';
import { MenuItemsService } from '../../services/menu-items.service';
import { MenusService } from '../../services/menus.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent extends CrudComponent  {

  override headTable: any[] = [
    'Id',
    'Menus Id',
    'Name',
    'Actions'
  ];

  menus: Menus[] = [];

  constructor(private menusService: MenusService){
    super(MenuItemsService);
  }

  override ngOnInit(): void {
    this.getListSubscribe();
    this.createSubscribe();
    this.updateSubscribe();
    this.deleteSubscribe();
    this.getMenusSubscribe();
  }

  override mapFunction(item: any): any {
    const menus = this.menus?.filter(x => x.$id === item.menuId);
    if(menus.length > 0){
      return {
        $id: item.$id,
        title: item.title,
        //name: item.name,
        menusId: menus[0]?.name,
      };
    }

    return {};
  }

  mapMenus(menus: any){
    return {$id: menus.$id, name: menus.name}
  }


  getMenusSubscribe(){
    this.menusService.list$.pipe(
      take(1),
      filter(x => x !== null),
    ).subscribe((menus: Menus[]) => {

      this.menus = menus.map(
        (menus: Menus) => this.mapMenus(menus)
      )
    })

    this.menusService.get();
  }
}

