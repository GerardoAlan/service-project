import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpResponseCustomerErrorComponent } from '../http-response-customer-error.component';

const routes: Routes = [
  {
    path: '',
    component: HttpResponseCustomerErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpResponseCustomerErrorRoutingModule { }