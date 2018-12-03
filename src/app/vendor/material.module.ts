import { NgModule } from '@angular/core';
import { MatCheckboxModule, MatIconModule, MatSlideToggleModule } from '@angular/material';

const components = [
  MatCheckboxModule,
  MatIconModule,
  MatSlideToggleModule
];

@NgModule({
  imports: components,
  exports: components
})
export class MaterialVendorModule { }
