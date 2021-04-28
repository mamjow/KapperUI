import { Component, Inject, Input, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RegisterResponse } from 'src/model/RegisterResponse.model';

@Component({
  selector: 'app-register-feed-back',
  templateUrl: './register-feed-back.component.html',
  styleUrls: ['./register-feed-back.component.scss']
})
export class RegisterFeedBackComponent implements OnInit {
  // @Input() data!: RegisterResponse;

  constructor(@Inject(MAT_DIALOG_DATA) public data: RegisterResponse) {}

  ngOnInit(): void {
  }

}
