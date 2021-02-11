import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAgeComponent } from './login-age.component';

describe('LoginAgeComponent', () => {
  let component: LoginAgeComponent;
  let fixture: ComponentFixture<LoginAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
