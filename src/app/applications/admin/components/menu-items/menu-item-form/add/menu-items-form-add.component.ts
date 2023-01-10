import { Menus } from './../../../../models/menus.model';
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MenusService } from 'src/app/applications/admin/services/menus.service';
import { AddFormComponent } from 'src/app/applications/shared/components/add-form/add-form.component';
import { MenuItemsService } from 'src/app/applications/admin/services/menu-items.service';

@Component({
  selector: 'app-menu-items-form-add',
  templateUrl: './menu-items-form-add.component.html',
  styleUrls: ['./menu-items-form-add.component.css']
})
export class MenuItemsFormAddComponent extends AddFormComponent {

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
    };
  }

}
