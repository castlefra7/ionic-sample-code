import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { AlertController, IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { MenuComponent } from '../components/menu/menu.component';
import { PlatComponent } from '../components/plat/plat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PictureComponent } from '../components/picture/picture.component';
import { LoginComponent } from '../components/login/login.component';
import { ProtectedComponent } from '../components/protected/protected.component';
import { AnotherprotectedComponent } from '../components/anotherprotected/anotherprotected.component';

@NgModule({
  declarations: [MenuComponent, PlatComponent, HomePage, PictureComponent, LoginComponent, ProtectedComponent, AnotherprotectedComponent],
  entryComponents: [],
  imports: [IonicModule, CommonModule, IonicModule.forRoot(), FormsModule, ReactiveFormsModule, HomePageRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AlertController
  ],
  bootstrap: [],
  exports: [MenuComponent]
})
export class HomePageModule { }
