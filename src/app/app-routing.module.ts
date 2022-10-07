import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'shopping-lists',
    loadChildren: () =>
      import(
        './screens/shopping-lists/shopping-lists/shopping-lists.module'
      ).then((m) => m.ShoppingListsModule),
  },
  {
    path: 'add-shopping-lists',
    loadChildren: () =>
      import(
        './screens/shopping-lists/add-shopping-lists/add-shopping-lists.module'
      ).then((m) => m.AddShoppingListsModule),
  },
  {
    path: '',
    redirectTo: 'shopping-lists',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
