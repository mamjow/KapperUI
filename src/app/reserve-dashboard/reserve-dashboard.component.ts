import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { ReserveService } from '../services/Reserve.service';


@Component({
  selector: 'app-reserve-dashboard',
  templateUrl: './reserve-dashboard.component.html',
  styleUrls: ['./reserve-dashboard.component.scss'],

})
export class ReserveDashboardComponent implements OnInit {

  weekSchedule: any[] = [] ;

  today: Date = new Date();
  
  constructor(private _reserve: ReserveService, private _authService: AuthenticationService, private _router: Router){
    if(!_authService.isLoggedIn()){
      this._router.navigateByUrl('/');
    }
    console.log(_authService.isLoggedIn());
  }

  ngOnInit(): void {
    this.weekSchedule = this._reserve.getWeekSchedule(this.today);
  }

}
