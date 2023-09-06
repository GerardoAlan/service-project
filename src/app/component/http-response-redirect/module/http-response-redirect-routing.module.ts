import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpResponseRedirectComponent } from '../http-response-redirect.component';

const routes: Routes = [
  {
    path: '',
    component: HttpResponseRedirectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpResponseRedirectRoutingModule { }