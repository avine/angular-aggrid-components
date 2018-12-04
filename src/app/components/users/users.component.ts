import { Component, OnInit } from '@angular/core';
import { ROLES, User } from '@app/models/user.model';
import { ApiService } from '@app/services/api.service';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  gridOptions: GridOptions;

  columnDefs = [
    {
      headerName: 'First name',
      field: 'firstName',
      editable: true,
    },
    {
      headerName: 'Last name',
      field: 'lastName',
      editable: true
    },
    {
      headerName: 'Email',
      field: 'email',
      editable: true
    },
    {
      headerName: 'Role',
      field: 'role',
      editable: true,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: { values: ROLES }
    },
    {
      headerName: 'Disabled',
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
      valueGetter: (params) => params.data.disabled ? 'Yes' : 'No',
      singleClickEdit: true
    },
  ];

  rowData: User[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUsers().subscribe(users => this.rowData = users);
  }

  gridReady(gridOptions: GridOptions) {
    this.gridOptions = gridOptions;
    this.gridOptions.api.sizeColumnsToFit();
    this.gridOptions.api.setDomLayout('autoHeight');
  }
}
