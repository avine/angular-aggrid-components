import { Component } from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular';
import { ICellEditorParams } from 'ag-grid-community';

@Component({
  selector: 'app-boolean-cell-editor',
  templateUrl: './boolean-cell-editor.component.html',
  styleUrls: ['./boolean-cell-editor.component.scss']
})
export class BooleanCellEditorComponent implements ICellEditorAngularComp {
  params: ICellEditorParams;

  constructor() { }

  agInit(params: ICellEditorParams) {
    this.params = params;
    setTimeout(() => this.params.api.stopEditing(), 0);
  }

  isPopup() {
    return true;
  }

  getValue() {
    return !this.params.value;
  }
}
