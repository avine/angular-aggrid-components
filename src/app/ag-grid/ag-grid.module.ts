import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

import { MaterialVendorModule } from '@app/shared/material.module';
import { BooleanEditorComponent } from './boolean-editor/boolean-editor.component';
import { BooleanRendererComponent } from './boolean-renderer/boolean-renderer.component';

const components = [
  BooleanRendererComponent,
  BooleanEditorComponent,
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
