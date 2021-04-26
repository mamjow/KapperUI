import { Component, Input, OnInit } from '@angular/core';
import { ReserveRequest } from 'src/model/ReserveRequest.model';
import { ScheduleTimeBlock } from 'src/model/ScheduleBlock.model';
import { TimeBlock } from 'src/model/TimeBlock.enum';

@Component({
  selector: 'app-timeblock',
  templateUrl: './timeblock.component.html',
  styleUrls: ['./timeblock.component.scss']
})
export class TimeblockComponent implements OnInit {
  @Input() 
  block: ScheduleTimeBlock = new ScheduleTimeBlock;

  @Input()
  dateValue: Date | undefined;

  reserveRequest: ReserveRequest | undefined;

  // ScheduleTimeBlock = ScheduleTimeBlock;

  ScheduleTimeBlock : typeof ScheduleTimeBlock = ScheduleTimeBlock ;
  
  constructor() { }

  ngOnInit(): void {
  }


  myFunction(){
    console.log(this.block.appointmentTimeBlock);
    this.reserveRequest = new ReserveRequest;
    this.reserveRequest.AppointmentTime = this.dateValue;
    this.reserveRequest.AppointmentTimeBlock = TimeBlock._0900_0930;
    this.reserveRequest.MembershipID = 1;
    this.reserveRequest.Name = "Mamjow";
    console.log(this.reserveRequest);
  }

}
