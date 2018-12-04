import { NgModule } from '@angular/core';
import {
    MatCheckboxModule, MatFormFieldModule, MatIconModule, MatOptionModule, MatRippleModule, MatSelectModule, MatSlideToggleModule
} from '@angular/material';

const components = [
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatOptionModule,
  MatRippleModule,
  MatSelectModule,
  MatSlideToggleModule
];

@NgModule({
  imports: components,
  exports: components
})
export class MaterialVendorModule { }
