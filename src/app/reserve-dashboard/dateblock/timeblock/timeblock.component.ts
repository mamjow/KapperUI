import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { HttpClientWithHeader } from 'src/app/services/http-header.service';
import { ReserveService } from 'src/app/services/Reserve.service';
import { ReserveRequest } from 'src/model/ReserveRequest.model';
import { ReserveResponse } from 'src/model/ReserveResponse.model';
import { ScheduleTimeBlock } from 'src/model/ScheduleTimeBlock.model';


@Component({
  selector: 'app-timeblock',
  templateUrl: './timeblock.component.html',
  styleUrls: ['./timeblock.component.scss']
})
export class TimeblockComponent implements OnInit {
  @Input() block!: ScheduleTimeBlock;

  @Input()
  dateValue!: Date;

  componentClass = "" ;
  
  constructor(private _reserveService: ReserveService, private _cd : ChangeDetectorRef) {

   }

  ngOnInit(): void {
    this.adjustStyle(this.block);
  }


  reserveAttemp(){
    if(this.block.isAvailable){
    const result = this._reserveService.reserveDay(this.createReserveRequestObject());
    result.subscribe(data  => {
        console.log(data);
        const response: ReserveResponse = data;
         if(response.isDone){
            this.block.isAvailable= false;
            this.block.ownTheReservation= true;
            this.adjustStyle(this.block);
            this._cd.detectChanges();
         }
    });
  }else if(this.block.ownTheReservation){
    console.log(" ejaze midam edit koni");
  }

  }

  createReserveRequestObject(): ReserveRequest{
    const reserveRequest: ReserveRequest = { AppointmentTime : this.dateValue , AppointmentTimeBlock :this.block.appointmentTimeBlock }
    return reserveRequest;
  }

  adjustStyle(block: ScheduleTimeBlock){
    if(block.isAvailable){
      this.componentClass = "date-timeblock free";
    }else{
      if(block.ownTheReservation){
        this.componentClass = "date-timeblock ownIt"
      }else{
        this.componentClass = "date-timeblock busy"
      }

    }

  }

}
