import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-widget-select-editable',
  templateUrl: './widget-select-editable.component.html',
  styleUrls: ['./widget-select-editable.component.scss']
})
export class WidgetSelectEditableComponent implements OnInit {
  @Input() values: string[] = [];

  @Input() value: string;

  @Output() valueChange = new EventEmitter<string>();

  edit = false;

  constructor() { }

  ngOnInit() {
  }

  change(value: string) {
    this.valueChange.emit(value);
    this.edit = false;
  }
}
