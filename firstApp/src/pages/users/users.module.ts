import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersPage } from './users';
import { NavController } from 'ionic-angular';

import { UserPage } from './user/user';

@NgModule({
  declarations: [
    UsersPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersPage),
  ],
})
export class UsersPageModule {
    // constructor(private navCtrl: NavController){
    //
    // }
    //
    // onLoadUser(name: string){
    //     this.navCtrl.push(UserPage, {userName: name});
    // }
}
