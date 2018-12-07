import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgGridVendorModule } from './ag-grid/ag-grid.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatGridComponent } from './components/mat-grid/mat-grid.component';
import { NavComponent } from './components/nav/nav.component';
import { UsersV2Component } from './components/users-v2/users-v2.component';
import { UsersComponent } from './components/users/users.component';
import { WidgetInputEditableComponent } from './components/widget-input-editable/widget-input-editable.component';
import { MaterialVendorModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UsersComponent,
    UsersV2Component,
    MatGridComponent,
    WidgetInputEditableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialVendorModule,
    AgGridVendorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
