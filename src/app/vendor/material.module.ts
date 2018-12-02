import { NgModule } from '@angular/core';
import { MatCheckboxModule, MatIconModule } from '@angular/material';

const components = [
  MatIconModule,
  MatCheckboxModule
];

@NgModule({
  imports: components,
  exports: components
})
export class MaterialVendorModule { }
