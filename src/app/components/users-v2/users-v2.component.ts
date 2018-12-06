import { Component, OnInit } from '@angular/core';
import {
  BooleanEditorComponent,
  BooleanRendererComponent,
  SelectEditorComponent,
  TextEditorComponent,
  TextFilterComponent,
} from '@app/ag-grid';
import { ROLES, User } from '@app/models/user.model';
import { ApiService } from '@app/services/api.service';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-users-v2',
  templateUrl: './users-v2.component.html',
  styleUrls: ['./users-v2.component.scss']
})
export class UsersV2Component implements OnInit {
  gridOptions: GridOptions;

  frameworkComponents = {
    booleanRenderer: BooleanRendererComponent,
    booleanEditor: BooleanEditorComponent,
    roleEditor: SelectEditorComponent,
    textEditor: TextEditorComponent,
    textFilter: TextFilterComponent
  };

  columnDefs = [
    {
      headerName: 'First name',
      field: 'firstName',
      editable: true,
      cellEditor: 'textEditor',
      filter: 'textFilter'
    },
    {
      headerName: 'Last name',
      field: 'lastName',
      editable: true,
      cellEditor: 'textEditor',
      filter: 'textFilter'
    },
    {
      headerName: 'Email',
      field: 'email',
      editable: true,
      filter: 'textFilter'
    },
    {
      headerName: 'Role',
      field: 'role',
      editable: true,
      cellEditor: 'roleEditor',
      cellEditorParams: { values: ROLES },
      filter: 'textFilter' // TODO: replace by a custom `RoleFilter`...
    },
    {
      headerName: 'Disabled',
      field: 'disabled',
      editable: true,
      cellRenderer: 'booleanRenderer',
      cellEditor: 'booleanEditor'
      // filter: ??? // TODO: make a `BooleanFilter`...
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
