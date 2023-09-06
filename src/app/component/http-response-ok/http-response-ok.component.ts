import { Component } from '@angular/core';
import { HttpExampleService } from 'src/app/service/http-example.service';

@Component({
  selector: 'app-http-response-ok',
  templateUrl: './http-response-ok.component.html',
  styleUrls: ['./http-response-ok.component.css']
})
export class HttpResponseOkComponent {

  constructor(
    private httpExampleService: HttpExampleService
  ){}

  sendHTTP200(){
    this.httpExampleService.sendHTTP200().subscribe((response:any) => {
      console.log("Send HTTP request that returns a code 200");
      console.log(JSON.stringify(response));
    });
  }

  sendHTTP201(){
    this.httpExampleService.sendHTTP201().subscribe((response:any) => {
      console.log("Send HTTP request that returns a code 201");
      console.log(JSON.stringify(response));
    });
  }

  sendHTTP202(){
    this.httpExampleService.sendHTTP202().subscribe((response:any) => {
      console.log("Send HTTP request that returns a code 202");
      console.log(JSON.stringify(response));
    });
  }

}