import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

const components = [
  MatButtonModule,
  MatCheckboxModule
];

@NgModule({
  imports: components,
  exports: components,
})
export class MaterialVendorModule { }
