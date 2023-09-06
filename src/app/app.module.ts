import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpResponseOkComponent } from './component/http-response-ok/http-response-ok.component';
import { HttpResponseRedirectComponent } from './component/http-response-redirect/http-response-redirect.component';
import { HttpResponseCustomerErrorComponent } from './component/http-response-customer-error/http-response-customer-error.component';
import { HttpResponseServerErrorComponent } from './component/http-response-server-error/http-response-server-error.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HttpResponseOkComponent,
    HttpResponseRedirectComponent,
    HttpResponseCustomerErrorComponent,
    HttpResponseServerErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
