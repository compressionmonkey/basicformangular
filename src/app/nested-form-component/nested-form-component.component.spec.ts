import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormComponentComponent } from './nested-form-component.component';

describe('NestedFormComponentComponent', () => {
  let component: NestedFormComponentComponent;
  let fixture: ComponentFixture<NestedFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
