import { Component, ElementRef, ViewChild } from '@angular/core';
import { IFilterAngularComp } from 'ag-grid-angular';
import { IAfterGuiAttachedParams, IDoesFilterPassParams, IFilterParams } from 'ag-grid-community';
import * as escapeStringRegexp from 'escape-string-regexp';

@Component({
  selector: 'app-text-filter',
  templateUrl: './text-filter.component.html',
  styleUrls: ['./text-filter.component.scss']
})
export class TextFilterComponent implements IFilterAngularComp {
  @ViewChild('field') field: ElementRef;

  private params: IFilterParams;

  placeholder = '';
  text = '';
  caseSensitive = false;

  agInit(params: IFilterParams) {
    this.params = params;
    this.placeholder = 'Filter on ' + (params.colDef.headerName || params.colDef.field);
  }

  afterGuiAttached(params: IAfterGuiAttachedParams) {
    setTimeout(() => this.field.nativeElement.focus(), 0);
  }

  getModel() {
    return { value: this.text };
  }

  setModel(model: any) {
    this.text = model ? model.value : '';
  }

  isFilterActive() {
    return [undefined, null, ''].indexOf(this.text) === -1;
  }

  doesFilterPass(params: IDoesFilterPassParams) {
    const value: string = this.params.valueGetter(params.node);
    const pattern = new RegExp(escapeStringRegexp(this.text), this.caseSensitive ? '' : 'i');
    return value.match(pattern) !== null;
  }

  change() {
    this.params.filterChangedCallback();
  }
}
