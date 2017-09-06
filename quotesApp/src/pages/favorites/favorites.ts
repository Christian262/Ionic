import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { Quote } from '../../data/quotes.interface';
import { QuotesService } from '../../services/quotes';
import { QuotePage } from '../quote/quote';
import { SettingsService } from '../../services/setting';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
    quotes: Quote[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private quotesService: QuotesService,
              private modalCtrl: ModalController,
              private settingsService: SettingsService) {
  }

  ionViewWillEnter(){
      this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote){
     const modal = this.modalCtrl.create(QuotePage, quote);
     modal.present();
     modal.onDidDismiss((remove: boolean) => {
         if(remove) {
            this.onRemoveFromFavorites(quote);
         }
     });
  }

  onRemoveFromFavorites(quote:Quote){
      this.quotesService.removeQuoteFromFavorites(quote);
     //  this.quotes = this.quotesService.getFavoriteQuotes();
     const position = this.quotes.findIndex((quoteEl: Quote) => {
         return quoteEl.id == quote.id;
     });
     this.quotes.splice(position, 1);
  }

  getBackground(){
      return this.settingsService.isAltBackground() ? 'altBackground' : 'quoteBackground'
  }

  isAltBackground(){
      return this.settingsService.isAltBackground();
  }


}
