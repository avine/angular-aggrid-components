import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSelectEditableComponent } from './widget-select-editable.component';

describe('WidgetSelectEditableComponent', () => {
  let component: WidgetSelectEditableComponent;
  let fixture: ComponentFixture<WidgetSelectEditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetSelectEditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetSelectEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
