import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PlacePage } from '../pages/place/place';
import { AddPlacePage } from '../pages/add-place/add-place';
import { SetLocationPage } from '../pages/set-location/set-location';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { PlacesService} from '../services/places';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlacePage,
    AddPlacePage,
    SetLocationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyB_6ANWQrX7KApxNqR5dwKrd_BY-lAarWE'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlacePage,
    AddPlacePage,
    SetLocationPage
  ],
  providers: [
    StatusBar,
    Geolocation,
    Camera,
    File,
    Storage,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlacesService
  ]
})
export class AppModule {}
