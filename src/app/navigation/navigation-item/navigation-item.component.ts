import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss']
})
export class NavigationItemComponent implements OnInit {
  @Input() btn_name: any;
  @Input() btn_href: any;
  @Input() item: any;

  constructor() { 
  }

  ngOnInit(): void {
    
    // console.log(cItem.name);
  }

}

