import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-block',
  templateUrl: './dateblock.component.html',
  styleUrls: ['./dateblock.component.scss']
})
export class DateblockComponent implements OnInit {

  daySchedule: Object[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }
  
}
