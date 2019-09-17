import { ItemStatus } from 'src/models/item-status';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from 'src/models/item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private items: Item[] = [];
  itemsChanged: Subject<Item[]> = new Subject();

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:4200/assets/items.json').subscribe(res => {
      this.items = <Item[]>res;
      this.itemsChanged.next(this.items);
    });
  }

  addItem(newItem: Item) {
    this.items.push(newItem);
    this.itemsChanged.next(this.items);
  }

  getItems(): Item[] {
    return this.items;
  }

  toggleItem(item: Item) {
    const i = this.items.findIndex(_item => item.value == _item.value);
    if (this.items[i].status == ItemStatus.DONE)
      this.items[i].status = ItemStatus.TODO;
    else
      this.items[i].status = ItemStatus.DONE;

    this.itemsChanged.next(this.items);
  }
}
