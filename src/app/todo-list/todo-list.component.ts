import { Component, OnInit } from '@angular/core';

export enum ItemStatus {
  TODO = 0,
  DONE = 1
}

export interface Item {
  label: string;
  value: number;
  status: ItemStatus
};

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  listTitle: string = "Project Tasks";
  items: Item[];
  newItem: string;

  constructor() { }

  addItem() {
    this.items.push({
      label: this.newItem,
      value: this.items.length + 1,
      status: ItemStatus.TODO
    });
    this.newItem = "";
  }

  ngOnInit() {
    this.items = [
      {
        label: "Have breakfest",
        value: 1,
        status: ItemStatus.DONE
      },
      {
        label: "Make coffee",
        value: 2,
        status: ItemStatus.TODO
      }
    ];
  }
}