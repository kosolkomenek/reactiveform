import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormModel } from './FormModel';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost:4201';

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }

  getConfig():Observable  <FormModel>{
     return this.http.get<FormModel>(this.configUrl);
  }
}
