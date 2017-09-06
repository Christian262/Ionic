import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PopoverController, LoadingController, AlertController } from 'ionic-angular';

import { ShoppingListService } from '../../services/shoppinglist';
import { Ingredient } from '../../models/ingredient';
import { DatabaseOptionsPage } from '../database-options/database-options';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'page-shoppinglist',
  templateUrl: 'shoppinglist.html',
})
export class ShoppinglistPage {
    listItems: Ingredient[];

    constructor(private slService: ShoppingListService, private popoverCtrl: PopoverController, private authService: AuthService,
    private loadCtrl: LoadingController, private alertCtrl: AlertController){}

    ionViewWillEnter(){
        this.listItems = this.slService.getItems();
    }

    onAddItem(form:NgForm){
        this.slService.addItem(form.value.name, form.value.amount);
        form.reset();
        this.loadItems();
    }

    onRemoveItem(index: number){
        this.slService.removeItem(index);
        this.loadItems();
    }

    onShowOptions(event: MouseEvent){
        const loading = this.loadCtrl.create({
            content: 'Please wait..'
        });
        const popover = this.popoverCtrl.create(DatabaseOptionsPage);
        popover.present({ev: event});
        popover.onDidDismiss(
            data => {
                if(!data){
                    return;
                }
                if (data.action == 'load'){
                    loading.present();
                    this.authService.getActiveUser().getIdToken ()
                        .then(
                            (token: string) => {
                                this.slService.fetchList(token)
                                    .subscribe(
                                        (list: Ingredient[]) => {
                                            loading.dismiss();
                                            if(list){
                                                this.listItems = list;
                                            } else {
                                                this.listItems = [];
                                            }
                                        },
                                        error => {
                                            loading.dismiss();
                                            this.handleError(error.json().error);
                                        }
                                    );
                            }
                        );
                } else if (data.action == "store") {
                    loading.present();
                    this.authService.getActiveUser().getIdToken ()
                        .then(
                            (token: string) => {
                                this.slService.storeList(token)
                                    .subscribe(
                                        () => loading.dismiss(),
                                        error => {
                                            loading.dismiss();
                                            this.handleError(error.json().error);
                                        }
                                    );
                            }
                        );
                }
            }
        );
    }

    private loadItems(){
        this.listItems = this.slService.getItems();
    }

    private handleError(errorMessage: string){
        const alert = this.alertCtrl.create({
            title: 'An error occured!',
            message: errorMessage,
            buttons: ['Ok']
        });
        alert.present();
    }


}