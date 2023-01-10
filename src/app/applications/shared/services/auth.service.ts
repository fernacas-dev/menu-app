import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  concatMap,
  from,
} from 'rxjs';
import { AppwriteApi } from './appwrite';

@Injectable({
 providedIn: 'root',
})
export class AuthService {
 private appwriteAPI = inject(AppwriteApi);
 private _user = new BehaviorSubject<any | null>(
   null
 );
 readonly user$ = this._user.asObservable();

 constructor(private router: Router) {}

 login(email: string, password: string) {
  const authReq = this.appwriteAPI.account.createEmailSession(email, password);
   return from(authReq).pipe(
     concatMap(() => this.appwriteAPI.account.get()),
   ).subscribe(user => {
      this._user.next(user)
   });
 }

 async isLoggedIn() {
   try {
     const user = await this.appwriteAPI.account.get();
     this._user.next(user);
     return true;
   } catch (e) {
     return false;
   }
 }

 async logout() {
   try {
     await this.appwriteAPI.account.deleteSession('current');
   } catch (e) {
     console.log(`${e}`);
   } finally {
     this.router.navigate(['/login']);
     this._user.next(null);
   }
 }

 IsLogged(): boolean {
  const userData = localStorage.getItem('cookieFallback');
  if(userData && userData !== "[]"){
    return true;
  }
  return false;
 }
}
