import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class UserDataService {

  private userDataSource = new BehaviorSubject({});
  userData = this.userDataSource.asObservable();

  constructor() { }

  changeUserData(message) {
    this.userDataSource.next(message)
  }
}
