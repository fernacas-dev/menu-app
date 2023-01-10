import { Component, Input } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Business } from 'src/app/applications/admin/models/business.model';
import { Menus } from 'src/app/applications/admin/models/menus.model';
import { MenuItemsService } from 'src/app/applications/admin/services/menu-items.service';
import { MenusService } from 'src/app/applications/admin/services/menus.service';
import { EditFormComponent } from 'src/app/applications/shared/components/edit-form/edit-form.component';

@Component({
  selector: 'app-menu-items-form-edit',
  templateUrl: './menu-items-form-edit.component.html',
  styleUrls: ['./menu-items-form-edit.component.css']
})
export class MenuItemsFormEditComponent extends EditFormComponent{

  @Input() formTitle: string = '';
  @Input() menus: Menus[] = [];

  constructor(formBuilder: FormBuilder, menuItemsService: MenuItemsService){
    super(formBuilder, menuItemsService);
  }

  override buildForm(){
    this.form = this.formBuilder?.group({
      title: ['', [Validators.required]],
      menuId: ['', [Validators.required]],
    });
  }

  override mapForm(item: any): any{
    return {
      title: item.title,
      menuId: item.menuId,
      $id: this.data?.$id
    };
  }
}
