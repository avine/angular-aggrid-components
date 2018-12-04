import { AgGridModule } from 'ag-grid-angular';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialVendorModule } from '@app/shared/material.module';

import { BooleanEditorComponent } from './boolean-editor/boolean-editor.component';
import { BooleanRendererComponent } from './boolean-renderer/boolean-renderer.component';
import { SelectEditorComponent } from './select-editor/select-editor.component';
import { TextEditorComponent } from './text-editor/text-editor.component';

const components = [
  BooleanRendererComponent,
  BooleanEditorComponent,
  SelectEditorComponent,
  TextEditorComponent
];

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    CommonModule,
    MaterialVendorModule,
    AgGridModule.withComponents(components)
  ],
  exports: [
    components,
    AgGridModule
  ],
})
export class AgGridVendorModule { }
