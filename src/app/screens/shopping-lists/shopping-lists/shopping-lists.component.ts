import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingListsService } from 'src/app/shared/shopping-lists.service';
import { Item } from '../../../types/item';
@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.scss'],
})
export class ShoppingListsComponent implements OnInit {
  constructor(
    private router: Router,
    private shoppingListsService: ShoppingListsService
  ) {}
  shoppingLists: Item[] = [];
  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.shoppingLists = this.shoppingListsService.getItems();
  }
  gotoAddPage() {
    this.router.navigate(['add-shopping-lists']);
  }
  changeItemStatus(item: Item) {
    item.status = !item.status;
    this.shoppingListsService.updateItem(item);
    this.getItems();
  }
}
