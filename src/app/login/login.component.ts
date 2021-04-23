import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../services/authentication.service';
import { tap, map } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private _authService: AuthenticationService) {

  }

  ngOnInit(): void {

  }


  sendLoginRequest() {
    let username = (<HTMLInputElement>document.getElementById("username")).value;

    let password = (<HTMLInputElement>document.getElementById("password")).value;

    let result = this._authService.callLoginEndPoint(username, password);

    result.subscribe({
      next: () => {
        this.errorDom(false);
      },
      error: () => {
        // 
        this.errorDom(true);
        ;
      }
    });

  }


  errorDom(visible:boolean){
    if(visible){
      console.log("Error message dom visible");

    }else{
      console.log("Error message dom invisible");

    }
  }

}
export interface LoginResponse {
  token: string;
}

