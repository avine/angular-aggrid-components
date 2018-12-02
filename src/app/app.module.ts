import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridVendorModule } from './ag-grid/ag-grid.module';
import { MaterialVendorModule } from './vendor/material.module';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialVendorModule,
    AgGridVendorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
