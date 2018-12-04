import { Injectable } from '@angular/core';
import { Role, User } from '@app/models/user.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getUsers() {
    const users: User[] = [
      { firstName: 'Stéphane', lastName: 'Francel', email: 'me@gmail.com', role: Role.Admin, disabled: false },
      { firstName: 'John', lastName: 'Doe', email: 'jdoe@gmail.com', role: Role.Guest, disabled: true }
    ];
    return of(users);
  }
}
