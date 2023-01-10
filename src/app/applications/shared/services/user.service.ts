import { inject, Injectable } from '@angular/core';
import { ID} from 'appwrite';
import { BehaviorSubject, concatMap, from, mergeMap, of, Subject, switchMap, tap } from 'rxjs';
import { UserDto } from '../models/user.model';
import { AppwriteApi } from './appwrite';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private appwriteAPI = inject(AppwriteApi);

  private logged = new Subject<any | null>();

  readonly logged$ = this.logged.asObservable();

  constructor() {}

  createAccount(userDto: UserDto){
    const registerResponse = this.appwriteAPI.account.create(ID.unique(), userDto.email, userDto.password );

    return from(registerResponse).pipe(
      mergeMap(() => this.appwriteAPI.account.updateName(userDto.name)),
      concatMap(() => this.appwriteAPI.account.get()),
    ).subscribe((user: any) => this.logged.next(user));
  }

}
