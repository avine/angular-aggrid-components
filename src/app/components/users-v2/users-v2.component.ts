import { Component, OnInit } from '@angular/core';
import { BooleanEditorComponent } from '@app/ag-grid/boolean-editor/boolean-editor.component';
import { BooleanRendererComponent } from '@app/ag-grid/boolean-renderer/boolean-renderer.component';
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
    booleanCellRenderer: BooleanRendererComponent,
    booleanCellEditor: BooleanEditorComponent
  };

  columnDefs = [
    {
      field: 'firstName',
      editable: true,
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
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: ROLES
      }
    },
    {
      field: 'disabled',
      editable: true,
      /*valueSetter: (params) => {
        const newValue = params.newValue.toLowerCase();
        if (['yes', 'no', 'y', 'n'].indexOf(newValue) !== -1) {
          params.data.disabled = newValue.substr(0, 1) === 'y' ? true : false;
          return true;
        }
        return false;
      },
      valueGetter: (params) => params.data.disabled ? 'Yes' : 'No',*/
      cellRenderer: 'booleanCellRenderer',
      cellEditor: 'booleanCellEditor',
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
    this.gridOptions.api.setDomLayout('autoHeight');
    this.gridOptions.columnApi.autoSizeAllColumns();
  }
}
