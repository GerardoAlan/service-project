import { Component } from '@angular/core';
import { HttpExampleService } from 'src/app/service/http-example.service';

@Component({
  selector: 'app-http-response-redirect',
  templateUrl: './http-response-redirect.component.html',
  styleUrls: ['./http-response-redirect.component.css']
})
export class HttpResponseRedirectComponent {

  constructor(
    private httpExampleService: HttpExampleService
  ){}

  sendHTTP300(){
    this.httpExampleService.sendHTTP300().subscribe((response:any) => {
      console.log("Send HTTP request that returns a code 300");
      console.log(JSON.stringify(response));
    });
  }

  sendHTTP301(){
    this.httpExampleService.sendHTTP301().subscribe((response:any) => {
      console.log("Send HTTP request that returns a code 301");
      console.log(JSON.stringify(response));
    });
  }

  sendHTTP302(){
    this.httpExampleService.sendHTTP302().subscribe((response:any) => {
      console.log("Send HTTP request that returns a code 302");
      console.log(JSON.stringify(response));
    });
  }

}
