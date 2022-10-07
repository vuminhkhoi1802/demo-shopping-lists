import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListsComponent } from './shopping-lists.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShoppingListsRoutingModule } from './shopping-lists-routing.module';



@NgModule({
  declarations: [
    ShoppingListsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShoppingListsRoutingModule
  ]
})
export class ShoppingListsModule { }
