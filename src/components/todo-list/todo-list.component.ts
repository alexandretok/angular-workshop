import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from 'src/services/todo.service';
import { ItemStatus } from 'src/models/item-status';
import { Item } from 'src/models/item';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input('filterStatus') filterStatus: ItemStatus;
  listTitle: string = "Project Tasks";
  newItem: string;
  items: Item[] = [];

  constructor(public todoService: TodoService) {}
  
  onSubmit(form: NgForm) {
    this.todoService.addItem({
      label: form.value.label,
      value: this.todoService.getItems().length + 1,
      status: ItemStatus.TODO
    });
    form.setValue({label: ""})
  }
  
  ngOnInit() {
    this.items = this.todoService.getItems().filter(item => item.status == this.filterStatus);
    this.todoService.itemsChanged.subscribe(items => this.items = items.filter(item => item.status == this.filterStatus));
  }
};