import { Injectable } from '@angular/core';
import { Client, Account} from 'appwrite';
import { Models } from 'appwrite/types/models';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  client: Client;
  account: Account;

  logged = new BehaviorSubject<any>({});
  logged$ = this.logged.asObservable();

  constructor() {
    this.client = new Client();
    this.client
    .setEndpoint(environment.APPWRITE_ENDPOINT)
    .setProject(environment.APPWRITE_PROJECT);
    this.account = new Account(this.client);

  }

  login(){
    const promise = this.account.createEmailSession('fernando@gmail.com', 'Ferna9606*');
    promise.then(function (response) {
        console.log(response); // Success

    }, function (error) {
        console.log(error); // Failure
    });
  }

  createAccount(){



    const promise = this.account.create('123', 'fernando@gmail.com', 'Ferna9606*');
    promise.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.log(error); // Failure
    });
  }

  getProfile() {

  }

  changeProfile() {

  }

}
