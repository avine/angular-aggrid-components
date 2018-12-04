import { Injectable } from '@angular/core';
import { User } from '@app/models/user.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getUsers() {
    const users: User[] = [
      { firstName: 'Stéphane', lastName: 'Francel', email: 'me@gmail.com', disabled: false },
      { firstName: 'John', lastName: 'Doe', email: 'jdoe@gmail.com', disabled: true }
    ];
    return of(users);
  }
}
