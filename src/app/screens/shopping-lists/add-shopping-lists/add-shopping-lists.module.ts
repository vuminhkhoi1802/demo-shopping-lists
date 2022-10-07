import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddShoppingListsComponent } from './add-shopping-lists.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddShoppingListsRoutingModule } from './add-shopping-lists-routing.module';



@NgModule({
  declarations: [
    AddShoppingListsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AddShoppingListsRoutingModule
  ]
})
export class AddShoppingListsModule { }
