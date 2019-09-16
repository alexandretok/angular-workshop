import { TodoService } from 'src/services/todo.service';
import { ItemStatus } from 'src/models/item-status';
import { Component, Input } from '@angular/core';
import { Item } from 'src/models/item';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input('item') item: Item;

  constructor(private todoService: TodoService) { }

  onChange() {
    this.todoService.toggleItem(this.item);
  }
}