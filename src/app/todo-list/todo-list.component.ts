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
  items: Item[];
  listTitle: string = "Project Tasks";

  constructor() {}

  addItem() {
    const newItem: Item = {
      label: `Item #${this.items.length + 1}`,
      value: this.items.length + 1,
      status: ItemStatus.TODO
    }

    this.items.push(newItem);
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