import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  menuItems = [
    {name:"Home", link:"/"},
    {name:"login", link:"/login"},
    {name:"Register", link:"/register"},
  ];
  eventListener: any;

  constructor(private _authService: AuthenticationService ) { }

  ngOnInit(): void {
    // this.checkLoginStat();
    this.eventListener = this._authService.loggedin.subscribe( () =>{ this.checkLoginStat();});
    this.checkLoginStat();
  }


  checkLoginStat()
  {
    if(this._authService.isLoggedIn())
    {
      this.changeMenuItemToLoggedIn();
    }else{
      this.changeMenuItemToLoggedOut();
    };
  }


  changeMenuItemToLoggedIn() {
    this.menuItems = [
      {name:"Home", link:"/"},
      {name:"profile", link:"/profile"},
      {name:"Reserve", link:"/reserve"},
      {name:"logout", link:"/logout"},
    ];

  }

  changeMenuItemToLoggedOut() {
    this.menuItems = [
      {name:"Home", link:"/"},
      {name:"login", link:"/login"},
      {name:"Register", link:"/register"},
    ];

  }

}
