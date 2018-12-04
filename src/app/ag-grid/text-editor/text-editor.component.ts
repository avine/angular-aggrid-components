import { Component } from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular';
import { ICellEditorParams } from 'ag-grid-community';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements ICellEditorAngularComp {
  params: ICellEditorParams;

  placeholder: string;

  agInit(params: ICellEditorParams) {
    this.params = params;
    const colDef = params.column.getColDef();
    this.placeholder = colDef.headerName || colDef.field;
  }

  isPopup() {
    return true;
  }

  change(value: string) {
    this.params.value = value;
  }

  getValue() {
    return this.params.value;
  }
}
