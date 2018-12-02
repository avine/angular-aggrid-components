import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  columnDefs = [
    { field: 'firstName' },
    { field: 'lastName' },
    { field: 'email' },
  ];

  rowData = [
    { firstName: 'Stéphane', lastName: 'Francel', email: 'me@gmail.com' },
    { firstName: 'John', lastName: 'Doe', email: 'jdoe@gmail.com' },
  ];

  constructor() { }

  ngOnInit() {
  }
}
