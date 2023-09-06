import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpResponseCustomerErrorComponent } from './http-response-customer-error.component';

describe('HttpResponseCustomerErrorComponent', () => {
  let component: HttpResponseCustomerErrorComponent;
  let fixture: ComponentFixture<HttpResponseCustomerErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpResponseCustomerErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpResponseCustomerErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
