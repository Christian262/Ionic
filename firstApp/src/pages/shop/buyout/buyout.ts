import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

@Component({
    selector: 'page-buyout',
    templateUrl: 'buyout.html'
})
export class BuyoutPage implements OnInit {
    item: String;

    constructor(private navParams: NavParams,
                private navCtrl: NavController){}

    ngOnInit(){
        this.item = this.navParams.get('itemName');
    }

    onGoBack(){
        // this.navCtrl.pop();
        this.navCtrl.popToRoot();
    }
}
