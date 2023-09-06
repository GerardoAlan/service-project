import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpResponseOkComponent } from './http-response-ok.component';

describe('HttpResponseOkComponent', () => {
  let component: HttpResponseOkComponent;
  let fixture: ComponentFixture<HttpResponseOkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpResponseOkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpResponseOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
