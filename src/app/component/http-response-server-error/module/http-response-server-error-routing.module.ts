import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpResponseServerErrorComponent } from '../http-response-server-error.component';

const routes: Routes = [
  {
    path: '',
    component: HttpResponseServerErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpResponseServerErrorRoutingModule { }