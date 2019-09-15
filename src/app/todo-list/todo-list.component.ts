import { Component, OnInit } from '@angular/core';

enum ItemStatus {
  TODO,
  DONE
}

interface Item {
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
        status: ItemStatus.TODO
      },
      {
        label: "Make coffee",
        value: 2,
        status: ItemStatus.TODO
      }
    ];
  }
}