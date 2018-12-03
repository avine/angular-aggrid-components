import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

import { MaterialVendorModule } from '../vendor/material.module';
import { BooleanCellEditorComponent } from './boolean-cell-editor/boolean-cell-editor.component';
import { BooleanCellRendererComponent } from './boolean-cell-renderer/boolean-cell-renderer.component';

const components = [
  BooleanCellRendererComponent,
  BooleanCellEditorComponent,
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
