import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RegisterRequest } from 'src/model/RegisterRequest.model';
import { MatDialog } from '@angular/material/dialog';

import { RegisterFeedBackComponent } from './register-feed-back/register-feed-back.component';
import { RegisterResponse } from 'src/model/RegisterResponse.model';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private _http: HttpClient, private _dialog: MatDialog) { }

  ngOnInit(): void {
  }


  sendRegisterRequest(){
    console.log(this.createRegisterRequest());
    this._http.post<RegisterResponse>("api/Client/register",this.createRegisterRequest()).subscribe(data => {
      console.log(data);
      const response: RegisterResponse = data;
      this.openDialog(response);

    })
 
  }

  openDialog(response: RegisterResponse) {
    const dialogRef = this._dialog.open(RegisterFeedBackComponent, {width: '400px',
      data: response
    });
  }

  createRegisterRequest(){

    let firstName = (<HTMLInputElement>document.getElementById("Firstname")).value;

    let infix = (<HTMLInputElement>document.getElementById("Infix")).value;

    let lastName = (<HTMLInputElement>document.getElementById("Lastname")).value;

    let phoneNumber = (<HTMLInputElement>document.getElementById("Phonenumber")).value;

    const request : RegisterRequest = { firstName,infix, lastName ,phoneNumber}
    return request
  }
}
