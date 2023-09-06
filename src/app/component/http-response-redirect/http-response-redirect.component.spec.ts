import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpResponseRedirectComponent } from './http-response-redirect.component';

describe('HttpResponseRedirectComponent', () => {
  let component: HttpResponseRedirectComponent;
  let fixture: ComponentFixture<HttpResponseRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpResponseRedirectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpResponseRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
