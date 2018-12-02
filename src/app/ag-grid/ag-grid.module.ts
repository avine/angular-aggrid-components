import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

import { BooleanCellRendererComponent } from './boolean-cell-renderer/boolean-cell-renderer.component';
import { MaterialVendorModule } from '../vendor/material.module';

const components = [
  BooleanCellRendererComponent,
];

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    MaterialVendorModule,
    AgGridModule.withComponents(components)
  ],
  exports: [
    components,
    AgGridModule
  ],
})
export class AgGridVendorModule { }
