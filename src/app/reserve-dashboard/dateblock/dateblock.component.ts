import { Component, Input, OnInit } from '@angular/core';
import { ScheduleTimeBlock } from 'src/model/ScheduleTimeBlock.model';

@Component({
  selector: 'app-date-block',
  templateUrl: './dateblock.component.html',
  styleUrls: ['./dateblock.component.scss']
})
export class DateblockComponent implements OnInit {
  @Input()
  dayBlock: { key: Date; value: ScheduleTimeBlock[]; } | undefined;
  
  constructor() {   }


  ngOnInit(): void {
}
  
}
