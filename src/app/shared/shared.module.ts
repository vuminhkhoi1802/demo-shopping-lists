import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './custom-material.module';
import { FormsModule } from '@angular/forms';
import { ShoppingListsService } from './shopping-lists.service';


@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule
  ],
  exports: [
    CustomMaterialModule,
    FormsModule
  ],
  providers: [
    ShoppingListsService
  ]
})
export class SharedModule { }
