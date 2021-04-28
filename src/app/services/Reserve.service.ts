import { Injectable, Type } from '@angular/core';
import { ReserveRequest } from 'src/model/ReserveRequest.model';

import { HttpClientWithHeader } from './http-header.service';



@Injectable({
    providedIn: 'root'
})


export class ReserveService {
    private url_getSchedule = "api/getSchedulePlan";
    private url_reserve = "api/Client/reserve";
    myDate: Date = new Date();
    /**
     *
     */
    constructor(private _http: HttpClientWithHeader) {

    }


    getWeekSchedule(startingDate:Date) {
        console.log("*** Get 7Day-plan starting :" + startingDate.getDate());
        var myList: { key: Date; value: Object; }[]= Array(7).fill(0);
        for (var _i = 0; _i < 7; _i++) {
            startingDate.setDate(startingDate.getDate() + 1);

            // console.log("before call get day  " + this.myDate);
            let tempDate= new Date(startingDate);
            let localPos = _i;
            this.getDaySchedule(tempDate).subscribe(data =>{
                let item = {
                    key: tempDate,
                    value : data
                };
                // myList.push(item);
                myList[localPos] = item;
            } );

          }
          console.log(myList);
          return myList;

    }


    private getDaySchedule(date: any) {
        const timeBlockList = this._http.post(this.url_getSchedule, date).pipe();
        return timeBlockList;

    }


    reserveDay(reserveRequest: ReserveRequest) {

        const result = this._http.post(this.url_reserve,reserveRequest ).pipe();
        return result
    }




}

