import { Component } from '@angular/core';
import { HttpExampleService } from 'src/app/service/http-example.service';

@Component({
  selector: 'app-http-response-customer-error',
  templateUrl: './http-response-customer-error.component.html',
  styleUrls: ['./http-response-customer-error.component.css']
})
export class HttpResponseCustomerErrorComponent {

  constructor(
    private httpExampleService: HttpExampleService
  ){}

  sendHTTP400(){
    this.httpExampleService.sendHTTP400().subscribe((response:any) => {
      console.log("Send HTTP request that returns a code 400");
      console.log(JSON.stringify(response));
    });
  }

  sendHTTP401(){
    this.httpExampleService.sendHTTP401().subscribe((response:any) => {
      console.log("Send HTTP request that returns a code 401");
      console.log(JSON.stringify(response));
    });
  }

  sendHTTP402(){
    this.httpExampleService.sendHTTP402().subscribe((response:any) => {
      console.log("Send HTTP request that returns a code 402");
      console.log(JSON.stringify(response));
    });
  }

}
