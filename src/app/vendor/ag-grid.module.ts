import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

const components = [

];

@NgModule({
  declarations: components,
  imports: [
    AgGridModule.withComponents(components)
  ],
  exports: [
    components,
    AgGridModule
  ],
})
export class AgGridVendorModule { }
