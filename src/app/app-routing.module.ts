import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HttpResponseOkComponent } from './component/http-response-ok/http-response-ok.component';
import { HttpResponseRedirectComponent } from './component/http-response-redirect/http-response-redirect.component';
import { HttpResponseCustomerErrorComponent } from './component/http-response-customer-error/http-response-customer-error.component';
import { HttpResponseServerErrorComponent } from './component/http-response-server-error/http-response-server-error.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'http-response-ok', component: HttpResponseOkComponent },
  { path: 'http-response-redirect', component: HttpResponseRedirectComponent },
  { path: 'http-response-customer-error', component: HttpResponseCustomerErrorComponent },
  { path: 'http-response-server-error', component: HttpResponseServerErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

