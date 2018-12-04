import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-boolean-renderer',
  templateUrl: './boolean-renderer.component.html',
  styleUrls: ['./boolean-renderer.component.scss']
})
export class BooleanRendererComponent implements ICellRendererAngularComp {
  disabled: boolean;

  constructor() { }

  agInit(params: ICellRendererParams) {
    this.disabled = params.data.disabled;
  }

  refresh() {
    return false;
  }
}
