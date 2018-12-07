import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetInputEditableComponent } from './widget-input-editable.component';

describe('WidgetInputEditableComponent', () => {
  let component: WidgetInputEditableComponent;
  let fixture: ComponentFixture<WidgetInputEditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetInputEditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetInputEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
