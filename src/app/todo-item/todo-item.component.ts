import { Component, Input } from '@angular/core';
import { Item } from '../todo-list/todo-list.component';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input('item') item: Item;

  constructor() { }
}