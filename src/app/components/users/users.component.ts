import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

import { BooleanCellEditorComponent } from '../../ag-grid/boolean-cell-editor/boolean-cell-editor.component';
import { BooleanCellRendererComponent } from '../../ag-grid/boolean-cell-renderer/boolean-cell-renderer.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  gridOptions: GridOptions;

  frameworkComponents = {
    booleanCellRenderer: BooleanCellRendererComponent,
    booleanCellEditor: BooleanCellEditorComponent
  };

  columnDefs = [
    { field: 'firstName' },
    { field: 'lastName' },
    { field: 'email' },
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

  rowData = [
    { firstName: 'Stéphane', lastName: 'Francel', email: 'me@gmail.com', disabled: false },
    { firstName: 'John', lastName: 'Doe', email: 'jdoe@gmail.com', disabled: true },
  ];

  constructor() { }

  ngOnInit() {
  }

  gridReady(gridOptions: GridOptions) {
    this.gridOptions = gridOptions;
    this.gridOptions.api.setDomLayout('autoHeight');
    this.gridOptions.columnApi.autoSizeAllColumns();
  }
}
