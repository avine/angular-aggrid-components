import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-boolean-renderer',
  templateUrl: './boolean-renderer.component.html',
  styleUrls: ['./boolean-renderer.component.scss']
})
export class BooleanRendererComponent implements ICellRendererAngularComp {
  value: boolean;

  agInit(params: ICellRendererParams) {
    this.value = params.value;
  }

  refresh() {
    return false;
  }
}
