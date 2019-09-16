import { ItemStatus } from 'src/models/item-status';
import { Injectable } from '@angular/core';
import { Item } from 'src/models/item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private items: Item[];
  itemsChanged: Subject<Item[]> = new Subject();

  constructor() {
    this.items = [
      {
        label: "Have breakfest",
        value: 1,
        status: ItemStatus.DONE
      },
      {
        label: "Make coffee",
        value: 2,
        status: ItemStatus.DONE
      },
      {
        label: "Schedule meeting",
        value: 3,
        status: ItemStatus.TODO
      },
      {
        label: "Call client",
        value: 4,
        status: ItemStatus.TODO
      },
      {
        label: "Make more coffee",
        value: 5,
        status: ItemStatus.TODO
      }
    ];
    this.itemsChanged.next(this.items);
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
