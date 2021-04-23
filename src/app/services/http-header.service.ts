import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class HttpClientWithHeader {


  constructor(private http: HttpClient, private cookie: CookieService) {}

  createAuthorizationHeader() {
    let token: string = this.cookie.get("auth");
    return new HttpHeaders().set('Authorization', 'Bearer '+token).append('responseType',"json");
  }

  get(url: string) {
    let headers = this.createAuthorizationHeader();
    return this.http.get(url, {
        headers,
    });
  }

  post(url: string, data: any) {
    let headers = this.createAuthorizationHeader();
    
    return this.http.post(url, data, {
        headers
    });
  }

}