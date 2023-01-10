import { Injectable } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class BusinessService extends CrudService {
  constructor(){
    super();
    this.setConnection('menuAppDB', 'business');
  }

}
