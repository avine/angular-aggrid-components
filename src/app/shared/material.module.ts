import { NgModule } from '@angular/core';
import { MatCheckboxModule, MatIconModule, MatRippleModule, MatSlideToggleModule } from '@angular/material';

const components = [
  MatCheckboxModule,
  MatIconModule,
  MatRippleModule,
  MatSlideToggleModule
];

@NgModule({
  imports: components,
  exports: components
})
export class MaterialVendorModule { }
