import { GridOptions } from 'ag-grid-community';

import { Component, OnInit } from '@angular/core';
import { BooleanEditorComponent } from '@app/ag-grid/boolean-editor/boolean-editor.component';
import { BooleanRendererComponent } from '@app/ag-grid/boolean-renderer/boolean-renderer.component';
import { SelectEditorComponent } from '@app/ag-grid/select-editor/select-editor.component';
import { ROLES, User } from '@app/models/user.model';
import { ApiService } from '@app/services/api.service';

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
    roleEditor: SelectEditorComponent
  };

  columnDefs = [
    {
      field: 'firstName',
      editable: true
    },
    {
      field: 'lastName',
      editable: true
    },
    {
      field: 'email',
      editable: true
    },
    {
      field: 'role',
      editable: true,
      cellEditor: 'roleEditor',
      cellEditorParams: { values: ROLES }
    },
    {
      field: 'disabled',
      editable: true,
      cellRenderer: 'booleanRenderer',
      cellEditor: 'booleanEditor',
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
