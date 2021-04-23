import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientWithHeader } from './http-header.service';
import { tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private url_address = "api/Client/login";

    loggedin = new EventEmitter();
    /**
     *
     */
    constructor(private _http: HttpClientWithHeader, private coockie: CookieService, private _router: Router) {
    }


    private saveAuthTokenInCookies(token: string) {
        console.log("Token added to the cookies");
        this.coockie.set("auth", token);
        this.loggedin.emit(true);
    }

    private deleteAuthTokenInCookies() {
        this.coockie.delete("auth");
        this.loggedin.emit(false);
        console.log("Token deleted to the cookies");
    }

    callLoginEndPoint(username: string, password: string) {
        let result = false;
        let loginRequest = { "username": username, "password": password }

        const obs = this._http.post(this.url_address, loginRequest).pipe(
            tap(
                data => {
                    let loginRes = data as LoginResponse;
                    this.saveAuthTokenInCookies(loginRes.token)
                    this._router.navigateByUrl('/');
                }
                , () => {
                    console.log("Failed to retrieve token");
                    ;
                }
            ));
        return obs;
    }

    logout() {
        this.deleteAuthTokenInCookies();
    }


}
export interface LoginResponse {
    token: string;
}