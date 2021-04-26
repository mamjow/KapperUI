import { Component, OnInit } from '@angular/core';
import { ReserveService } from '../services/Reserve.service';


@Component({
  selector: 'app-reserve-dashboard',
  templateUrl: './reserve-dashboard.component.html',
  styleUrls: ['./reserve-dashboard.component.scss'],

})
export class ReserveDashboardComponent implements OnInit {

  weekSchedule: Object[] = [];

  constructor(private _reserve: ReserveService){

  }

  ngOnInit(): void {
    this.weekSchedule = this._reserve.getWeekSchedule();
  }

}
