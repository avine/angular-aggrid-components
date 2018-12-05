import { Component } from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular';
import { ICellEditorParams } from 'ag-grid-community';

@Component({
  selector: 'app-boolean-editor',
  templateUrl: './boolean-editor.component.html',
  styleUrls: ['./boolean-editor.component.scss']
})
export class BooleanEditorComponent implements ICellEditorAngularComp {
  params: ICellEditorParams;

  agInit(params: ICellEditorParams) {
    this.params = params;
    setTimeout(() => this.params.stopEditing(), 250);
  }

  isPopup() {
    return true;
  }

  getValue() {
    return !this.params.value;
  }
}
