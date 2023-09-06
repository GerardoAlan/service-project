import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HttpExampleService {

  constructor(
    private http: HttpClient
  ) { }

  sendHTTP200(): Observable<any> {
    return this.http.get(environment.url + 'get200');
  }

  sendHTTP201(): Observable<any> {
    return this.http.get(environment.url + 'get201');
  }

  sendHTTP202(): Observable<any> {
    return this.http.get(environment.url + 'get202');
  }

  sendHTTP300(): Observable<any> {
    return this.http.get(environment.url + 'get300');
  }

  sendHTTP301(): Observable<any> {
    return this.http.get(environment.url + 'get301');
  }

  sendHTTP302(): Observable<any> {
    return this.http.get(environment.url + 'get302');
  }

  sendHTTP400(): Observable<any> {
    return this.http.get(environment.url + 'get400');
  }

  sendHTTP401(): Observable<any> {
    return this.http.get(environment.url + 'get401');
  }

  sendHTTP402(): Observable<any> {
    return this.http.get(environment.url + 'get402');
  }

  sendHTTP500(): Observable<any> {
    return this.http.get(environment.url + 'get500');
  }

  sendHTTP501(): Observable<any> {
    return this.http.get(environment.url + 'get501');
  }

  sendHTTP502(): Observable<any> {
    return this.http.get(environment.url + 'get502');
  }

}
