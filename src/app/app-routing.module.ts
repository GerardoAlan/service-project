import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HttpResponseOkComponent } from './component/http-response-ok/http-response-ok.component';
import { HttpResponseRedirectComponent } from './component/http-response-redirect/http-response-redirect.component';
import { HttpResponseCustomerErrorComponent } from './component/http-response-customer-error/http-response-customer-error.component';
import { HttpResponseServerErrorComponent } from './component/http-response-server-error/http-response-server-error.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  /*{
    path: 'login',
    loadChildren: () => import('./component/login/module/login.module').then(m => m.LoginModule)
  },  
  {
    path: 'http-response-ok',
    loadChildren: () => import('./component/http-response-ok/module/http-response-ok.module').then(m => m.HttpResponseOkModule)
  },
  {
    path: 'http-response-redirect',
    loadChildren: () => import('./component/http-response-redirect/module/http-response-redirect.module').then(m => m.HttpResponseRedirectModule)
  },
  {
    path: 'http-response-customer-error',
    loadChildren: () => import('./component/http-response-customer-error/module/http-response-customer-error.module').then(m => m.HttpResponseCustomerErrorModule)
  },
  {
    path: 'http-response-server-error',
    loadChildren: () => import('./component/http-response-server-error/module/http-response-server-error.module').then(m => m.HttpResponseServerErrorModule),
    canActivate: [AuthGuard]
  },*/
  { path: 'login', component: LoginComponent },
  { path: 'http-response-ok', component: HttpResponseOkComponent },
  { path: 'http-response-redirect', component: HttpResponseRedirectComponent },
  { path: 'http-response-customer-error', component: HttpResponseCustomerErrorComponent },
  { path: 'http-response-server-error', component: HttpResponseServerErrorComponent, canActivate: [AuthGuard] },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

