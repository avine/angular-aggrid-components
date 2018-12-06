import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgGridVendorModule } from './ag-grid/ag-grid.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { UsersV2Component } from './components/users-v2/users-v2.component';
import { UsersComponent } from './components/users/users.component';
import { MaterialVendorModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersV2Component,
    NavComponent
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
