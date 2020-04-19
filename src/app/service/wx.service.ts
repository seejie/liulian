import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class wxApi {


  constructor(private http: HttpClient) { }

  getAccessToken(config): Observable<any>{
    const {appId, secret} = config
    const getMenuURL = `https://restservice.pavertech.my/api/weixinToken?grant_type=client_credential&appid=${appId}&secret=${secret}`;
    return this.http.get<any>(getMenuURL);
  }
}
