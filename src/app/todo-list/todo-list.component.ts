import { Component, OnInit } from '@angular/core';

interface Item {
  label: string;
  value: string;
};

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  items: Item[];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: "Have breakfest",
        value: "hv_bf"
      },
      {
        label: "Make coffee",
        value: "mk_cf"
      }
    ];
  }
}