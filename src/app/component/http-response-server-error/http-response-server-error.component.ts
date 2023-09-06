import { Component } from '@angular/core';
import { HttpExampleService } from 'src/app/service/http-example.service';

@Component({
  selector: 'app-http-response-server-error',
  templateUrl: './http-response-server-error.component.html',
  styleUrls: ['./http-response-server-error.component.css']
})
export class HttpResponseServerErrorComponent {

  constructor(
    private httpExampleService: HttpExampleService
  ){}

  sendHTTP500(){
    this.httpExampleService.sendHTTP500().subscribe((response:any) => {
      console.log("Send HTTP request that returns a code 500");
      console.log(JSON.stringify(response));
    });
  }

  sendHTTP501(){
    this.httpExampleService.sendHTTP501().subscribe((response:any) => {
      console.log("Send HTTP request that returns a code 501");
      console.log(JSON.stringify(response));
    });
  }

  sendHTTP502(){
    this.httpExampleService.sendHTTP502().subscribe((response:any) => {
      console.log("Send HTTP request that returns a code 502");
      console.log(JSON.stringify(response));
    });
  }

}
