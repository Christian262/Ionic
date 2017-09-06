import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import {Quote} from '../../data/quotes.interface';
import {QuotesService } from '../../services/quotes';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
    quoteGroup: {category: string, quotes: Quote[], icon: string}

  constructor(public navCtrl: NavController,
            public navParams: NavParams,
            private alertCtrl: AlertController,
            private quotesService: QuotesService) {

  }

  ngOnInit(){
      this.quoteGroup = this.navParams.data;
  }

  // ionViewDidLoad(){
  //     this.quoteGroup = this.navParams.data;
  // Add elvis operator (?) in template to use this appraoch
  // }
  onAddToFavorites(selectedQuote: Quote){
      const alert = this.alertCtrl.create({
         title: 'Add Quote',
         subTitle: 'Are you sure?',
         message: 'Are you sure you want to add the quote',
         buttons: [
             {
                 text: 'Go ahead',
                 handler: () => {
                     this.quotesService.addQuoteToFavorites(selectedQuote);
                 }
             },
            {
                text: 'No, I changed my mind',
                role: 'cancel',
                handler:() => {
                 console.log('Cancelled')
             }
         }
         ]
      });

      alert.present();
  }

  onRemoveFromFavorites(quote: Quote){
      return this.quotesService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote:Quote){
      return this.quotesService.isQuoteFavorite(quote);
  }
}
