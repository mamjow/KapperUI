import { Injectable } from '@angular/core';
import { HttpClientWithHeader } from './http-header.service';
import { DatePipe } from '@angular/common';
import { tap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})


export class ReserveService {
    private url_adress = "api/getSchedulePlan";
    myDate: any = new Date();
    /**
     *
     */
    constructor(private _http: HttpClientWithHeader, private datePipe: DatePipe) {
        // this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

    }


    getWeekSchedule() {
        var myList: Object[] = [];
        for (var _i = 0; _i < 7; _i++) {
            this.myDate.setDate(this.myDate.getDate() + 1);

            this.getDaySchedule(this.myDate).subscribe(data => myList.push(data));

          }
          return myList;

    }


    private getDaySchedule(date: Date) {
        // const timeBlockList = this._http.post(this.url_adress, date).pipe(
        //     tap(
        //         data => {
        //             console.log("hoi");
        //             console.log(data);
        //         },
        //         () => {
        //             console.log("Fout");
        //         }
        //     ));

        return this._http.post(this.url_adress, date);

    }


    reserveDay() {


    }




}