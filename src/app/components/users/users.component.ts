import { Component, OnInit } from '@angular/core';
import { BooleanCellEditorComponent } from '@app/ag-grid/boolean-cell-editor/boolean-cell-editor.component';
import { BooleanCellRendererComponent } from '@app/ag-grid/boolean-cell-renderer/boolean-cell-renderer.component';
import { User } from '@app/models/user.model';
import { ApiService } from '@app/services/api.service';
import { GridOptions } from 'ag-grid-community';

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
