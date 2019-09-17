import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-page',
  templateUrl: './other-page.component.html',
  styleUrls: ['./other-page.component.css']
})
export class OtherPageComponent implements OnInit {
  item = {
    label: "This is an item",
    status: "TODO",
    value: 1
  };
  
  constructor() { }

  ngOnInit() {
  }

}
