import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingListsService } from 'src/app/shared/shopping-lists.service';

@Component({
  selector: 'app-add-shopping-lists',
  templateUrl: './add-shopping-lists.component.html',
  styleUrls: ['./add-shopping-lists.component.scss']
})
export class AddShoppingListsComponent implements OnInit {

  constructor(private readonly shoppingListService: ShoppingListsService,
  private router: Router) { }
  name: string = '';
  ngOnInit(): void {
  }

  onAddItemToList() {
    this.shoppingListService.addItem(this.name);
    this.name = '';
  }

  onBack() {
    this.router.navigate(['/shopping-lists']);
  }
}
