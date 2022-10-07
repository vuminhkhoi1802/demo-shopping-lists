import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingListsService } from 'src/app/shared/shopping-lists.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Item } from '../../../types/item';

@Component({
  selector: 'app-add-shopping-lists',
  templateUrl: './add-shopping-lists.component.html',
  styleUrls: ['./add-shopping-lists.component.scss'],
})
export class AddShoppingListsComponent implements OnInit {
  constructor(
    private readonly shoppingListService: ShoppingListsService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}
  name: string = '';
  recentlyAdded: Item[] = []
  ngOnInit(): void {}
  onAddItemToList() {
    this.shoppingListService.addItem(this.name);
    this.recentlyAdded.push({content: this.name})
    this.name = '';
    this._snackBar.openFromComponent(NotiComponent, {
      duration: 1000
    })
  }

  onBack() {
    this.router.navigate(['/shopping-lists']);
  }
}

@Component({
  selector: 'app-noti',
  template: `<p>Item added successfully!</p>`,
})
export class NotiComponent {}
