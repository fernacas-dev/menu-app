import { Component, ComponentRef, Injectable } from '@angular/core';
import { BehaviorSubject, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private _openModal = new BehaviorSubject<any | null>(
    null
  );
  readonly _openModal$ = this._openModal.asObservable();

  constructor() { }

  openModal(componentRef: any){
    return of(true).subscribe(() => this._openModal.next(componentRef));
   }

   closeModal(){
    return of(false).subscribe(() => this._openModal.next(null));
   }
}
