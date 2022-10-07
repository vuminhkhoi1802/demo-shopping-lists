import { Injectable } from '@angular/core';
import { Observable, Subject, Subscriber } from 'rxjs';
import { Item } from '../types/item';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListsService {
  rawShoppingList: string | null = '';
  shoppingLists: Item[] = [];
  constructor() {
    this.loadShoppingLists();
  }
  addItem(content: string) {
    this.loadShoppingLists();
    const payload = {
      id: this.shoppingLists.length + 1,
      content,
      status: true,
    };
    this.shoppingLists.push(payload);
    this.setStorage();
  }

  getItems(): Item[] {
    const rawShoppingLists = sessionStorage.getItem('shoppingLists');
    return rawShoppingLists ? JSON.parse(rawShoppingLists) : [];
  }

  updateItem(item: Item) {
    this.loadShoppingLists();
    this.shoppingLists = this.shoppingLists.map((i) => {
      if (i.id === item.id) {
        i = item;
      }
      return i;
    });
    this.setStorage();
  }

  setStorage() {
    sessionStorage.setItem('shoppingLists', JSON.stringify(this.shoppingLists));
  }

  loadShoppingLists() {
    this.rawShoppingList = sessionStorage.getItem('shoppingLists');
    this.shoppingLists = this.rawShoppingList
      ? JSON.parse(this.rawShoppingList)
      : [];
  }
}
