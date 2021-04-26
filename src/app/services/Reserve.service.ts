import { Injectable } from '@angular/core';
import { HttpClientWithHeader } from './http-header.service';



@Injectable({
    providedIn: 'root'
})


export class ReserveService {
    private url_adress = "api/getSchedulePlan";
    myDate: Date = new Date();
    /**
     *
     */
    constructor(private _http: HttpClientWithHeader) {

    }


    getWeekSchedule() {
        var myList: { key: Date; value: Object; }[]= [];
        for (var _i = 0; _i < 7; _i++) {
            this.myDate.setDate(this.myDate.getDate() + 1);

            // console.log("before call get day  " + this.myDate);
            let tempDate= new Date(this.myDate);
            this.getDaySchedule(tempDate).subscribe(data =>{
                let item = {
                    key: tempDate,
                    value : data
                };
                myList.push(item);
            } );

          }
          console.log(myList);
          return myList;

    }


    private getDaySchedule(date: any) {
        const timeBlockList = this._http.post(this.url_adress, date).pipe();
        return timeBlockList;

    }


    reserveDay() {


    }




}

