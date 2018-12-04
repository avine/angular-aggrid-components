import { ICellEditorAngularComp } from 'ag-grid-angular';
import { ICellEditorParams } from 'ag-grid-community';

import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-select-editor',
  templateUrl: './select-editor.component.html',
  styleUrls: ['./select-editor.component.scss']
})
export class SelectEditorComponent implements ICellEditorAngularComp {
  params: ICellEditorParams;

  placeholder: string;
  values: string[];
  selectedValue: string;

  agInit(params: ICellEditorParams) {
    this.params = params;
    this.placeholder = params.column.getColDef().field;
    this.values = params['values'];
    this.selectedValue = params.value;
  }

  isPopup() {
    return true;
  }

  change(event: MatSelectChange) {
    this.selectedValue = event.value;
    this.params.stopEditing();
  }

  getValue() {
    return this.selectedValue;
  }

  keyDown(event) {
    event.stopPropagation();
  }
}
