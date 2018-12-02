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
    {
      field: 'disabled',
      editable: true,
      valueSetter: (params) => {
        const newValue = params.newValue.toLowerCase();
        if (['yes', 'no', 'y', 'n'].indexOf(newValue) !== -1) {
          params.data.disabled = newValue.substr(0, 1) === 'y' ? true : false;
          return true;
        }
        return false;
      },
      valueGetter: (params) => params.data.disabled ? 'Yes' : 'No'
    },
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
