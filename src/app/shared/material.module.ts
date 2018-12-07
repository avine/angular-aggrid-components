import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatRippleModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatTableModule
} from '@angular/material';

const components = [
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatRippleModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatTableModule
];

@NgModule({
  imports: components,
  exports: components
})
export class MaterialVendorModule { }
