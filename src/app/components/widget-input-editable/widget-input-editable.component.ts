import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-widget-input-editable',
  templateUrl: './widget-input-editable.component.html',
  styleUrls: ['./widget-input-editable.component.scss']
})
export class WidgetInputEditableComponent implements OnInit {
  @Input() value: string;

  @Output() valueChange = new EventEmitter<string>();

  edit = false;

  constructor() { }

  ngOnInit() {
  }
}
