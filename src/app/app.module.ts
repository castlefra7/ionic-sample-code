import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './home/home.module';
import { AUTH_PROVIDERS } from './services/auth.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FileChooser } from '@ionic-native/file-chooser';


// export const firebaseConfig = {
//   apiKey: "AIzaSyAQNh1grr366oN7RC-BzhUELDMI-XnYnX0",
//   authDomain: "learn-jean.firebaseapp.com",
//   projectId: "learn-jean",
//   storageBucket: "learn-jean.appspot.com",
//   messagingSenderId: "1000413520391",
//   appId: "1:1000413520391:web:87531f67f8d54db67fc0a2",
//   measurementId: "G-GZGXFW9739"
// };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule, IonicModule.forRoot(), AppRoutingModule, HomePageModule, 
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireDatabaseModule,
    // AngularFireAuthModule,
    // AngularFireStorageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AUTH_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
