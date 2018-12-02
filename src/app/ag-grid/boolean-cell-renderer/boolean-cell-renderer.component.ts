import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-boolean-cell-renderer',
  templateUrl: './boolean-cell-renderer.component.html',
  styleUrls: ['./boolean-cell-renderer.component.scss']
})
export class BooleanCellRendererComponent implements ICellRendererAngularComp {
  disabled: boolean;

  constructor() { }

  agInit(params: ICellRendererParams) {
    this.disabled = params.data.disabled;
  }

  refresh() {
    return false;
  }
}
