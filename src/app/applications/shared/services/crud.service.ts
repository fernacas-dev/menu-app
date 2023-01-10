import { inject, Injectable } from '@angular/core';
import { ID } from 'appwrite';
import { BehaviorSubject, debounceTime, distinct, filter, from, Subscription, throttleTime } from 'rxjs';
import { AppwriteApi } from './appwrite';

@Injectable({
  providedIn: 'root'
})
export class CrudService implements ICrudService{
  private appwriteAPI = inject(AppwriteApi);
  public dbId: string = '';
  public tableId: string = '';

  private _list = new BehaviorSubject<any | null>(
    null
  );
  readonly list$ = this._list.asObservable();

  private _created = new BehaviorSubject<any | null>(
    null
  );
  readonly created$ = this._created.asObservable();

  private _updated = new BehaviorSubject<any | null>(
    null
  );
  readonly updated$ = this._updated.asObservable();

  private _deleted = new BehaviorSubject<any | null>(
    null
  );
  readonly deleted$ = this._deleted.asObservable();

  constructor(){}

  setConnection(dbId: string, tableId: string){
    this.dbId = dbId;
    this.tableId = tableId;
  }

 get() {
  const resp = this.appwriteAPI.database.listDocuments(this.dbId, this.tableId);
  return from(resp).pipe(
    filter( x => x !== null),
    //throttleTime(300)
  ).subscribe(data => {
      if(data.total > 0)
        this._list.next(data.documents)
   });
 }

 add(item: any) {
  const categoryCreated = this.appwriteAPI.database.createDocument(this.dbId, this.tableId, ID.unique(), item);
  return from(categoryCreated).pipe(
    distinct(),
    filter( x => x !== null),
    debounceTime(300)
  ).subscribe(item => {
    if(item !== null)
      this._created.next(item)
  });
 }

 edit(item: any) {
  const resp = this.appwriteAPI.database.updateDocument(this.dbId, this.tableId, item.$id!, item);
  return from(resp).pipe(
    distinct(),
    filter( x => x !== null),
    debounceTime(300)
  ).subscribe(item => {
    if(item !== null)
      this._updated.next(item)
  });
 }

 delete(itemId:string){
  const resp = this.appwriteAPI.database.deleteDocument(this.dbId, this.tableId, itemId);
  return from(resp).pipe(
    distinct(),
    filter( x => x !== null),
    throttleTime(300)
  ).subscribe(() => {
    this._deleted.next(itemId);
  })
 }
}


interface ICrudService {
  dbId: string,
  tableId: string,
  setConnection(dbId: string, tableId: string): void;
  get(): Subscription;
  add(item: any): Subscription;
  edit(item: any): Subscription;
  delete(itemId: string): Subscription;

}
