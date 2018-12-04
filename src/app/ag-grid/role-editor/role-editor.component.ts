import { ICellEditorAngularComp } from 'ag-grid-angular';
import { ICellEditorParams } from 'ag-grid-community';

import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-role-editor',
  templateUrl: './role-editor.component.html',
  styleUrls: ['./role-editor.component.scss']
})
export class RoleEditorComponent implements ICellEditorAngularComp {
  params: ICellEditorParams;

  values: string[];
  selectedValue: string;

  agInit(params: ICellEditorParams) {
    this.params = params;
    this.values = params['values'];
    this.selectedValue = params.value;
  }

  isPopup() {
    return false;
  }

  change(event: MatSelectChange) {
    this.selectedValue = event.value;
    this.params.stopEditing();
  }

  getValue() {
    return this.selectedValue;
  }
}
