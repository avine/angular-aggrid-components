import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  gridOptions: GridOptions;

  columnDefs = [
    { field: 'firstName' },
    { field: 'lastName' },
    { field: 'email' },
    { field: 'disabled' },
  ];

  rowData = [
    { firstName: 'Stéphane', lastName: 'Francel', email: 'me@gmail.com', disabled: false },
    { firstName: 'John', lastName: 'Doe', email: 'jdoe@gmail.com', disabled: true },
  ];

  constructor() { }

  ngOnInit() {
  }

  gridReady(gridOptions: GridOptions) {
    this.gridOptions = gridOptions;
    this.gridOptions.api.setGridAutoHeight(true);
    this.gridOptions.columnApi.autoSizeAllColumns();
  }
}
