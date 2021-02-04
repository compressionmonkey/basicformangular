import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayFormComponentComponent } from './array-form-component.component';

describe('ArrayFormComponentComponent', () => {
  let component: ArrayFormComponentComponent;
  let fixture: ComponentFixture<ArrayFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
