import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddShoppingListsComponent } from './add-shopping-lists.component';

const routes: Routes = [{ path: '', component: AddShoppingListsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddShoppingListsRoutingModule {}
