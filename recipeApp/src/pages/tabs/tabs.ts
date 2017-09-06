import { Component } from '@angular/core';

import { ShoppinglistPage } from '../shoppinglist/shoppinglist';
import { RecipesPage } from '../recipes/recipes';

@Component({
  selector: 'page-tabs',
  template: `
      <ion-tabs>
      <ion-tab [root]="shoppinglistPage" tabTitle="Shopping List" tabIcon="book"></ion-tab>
      <ion-tab [root]="recipesPage" tabTitle="Recipes" tabIcon="flask"></ion-tab>
      </ion-tabs>
  `
})
export class TabsPage {
    recipesPage = RecipesPage;
    shoppinglistPage = ShoppinglistPage;

}
