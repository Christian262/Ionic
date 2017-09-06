import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import {AuthService} from '../services/auth';
import { EditRecipePage } from '../pages/edit-recipe/edit-recipe';
import { RecipesPage } from '../pages/recipes/recipes';
import { RecipePage } from '../pages/recipe/recipe';
import { ShoppinglistPage } from '../pages/shoppinglist/shoppinglist';
import { TabsPage } from '../pages/tabs/tabs';
import { ShoppingListService } from '../services/shoppinglist';
import { RecipesService } from '../services/recipes';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { DatabaseOptionsPage } from '../pages/database-options/database-options';

@NgModule({
  declarations: [
    MyApp,
    RecipesPage,
    ShoppinglistPage,
    TabsPage,
    RecipePage,
    EditRecipePage,
    SigninPage,
    SignupPage,
    DatabaseOptionsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RecipesPage,
    ShoppinglistPage,
    TabsPage,
    RecipePage,
    EditRecipePage,
    SigninPage,
    SignupPage,
    DatabaseOptionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListService, RecipesService, AuthService
  ]
})
export class AppModule {}
