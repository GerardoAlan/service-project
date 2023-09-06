import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpResponseOkComponent } from '../http-response-ok.component';

const routes: Routes = [
  {
    path: '',
    component: HttpResponseOkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpResponseOkRoutingModule { }