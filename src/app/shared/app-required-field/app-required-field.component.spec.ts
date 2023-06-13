import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRequiredFieldComponent } from './app-required-field.component';

describe('AppRequiredFieldComponent', () => {
  let component: AppRequiredFieldComponent;
  let fixture: ComponentFixture<AppRequiredFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [AppRequiredFieldComponent]
});
    fixture = TestBed.createComponent(AppRequiredFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
