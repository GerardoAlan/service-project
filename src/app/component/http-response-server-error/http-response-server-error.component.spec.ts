import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpResponseServerErrorComponent } from './http-response-server-error.component';

describe('HttpResponseServerErrorComponent', () => {
  let component: HttpResponseServerErrorComponent;
  let fixture: ComponentFixture<HttpResponseServerErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpResponseServerErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpResponseServerErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
