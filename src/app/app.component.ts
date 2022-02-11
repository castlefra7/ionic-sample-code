import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';

// import { AngularFireDatabase } from '@angular/fire/database';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from '@capacitor/core';

const { PushNotifications } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authService: AuthService,
    // public afDB: AngularFireDatabase
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    // this.add();
  }


  // add() {
  //   this.afDB.list('people').valueChanges().subscribe(tab => {
  //     console.log(tab);
  //   })
  //   // console.log(this.afDB.list('people/'));
  //   // this.afDB.list('people/').push({
  //   //   name: 'jean'
  //   // });





  //   console.log('Initializing HomePage');

  //   // Request permission to use push notifications
  //   // iOS will prompt user and return if they granted permission or not
  //   // Android will just grant without prompting
  //   PushNotifications.requestPermission().then(result => {
  //     if (result.granted) {
  //       // Register with Apple / Google to receive push via APNS/FCM
  //       PushNotifications.register();
  //     } else {
  //       // Show some error
  //     }
  //   });

  //   PushNotifications.addListener(
  //     'registration',
  //     (token: PushNotificationToken) => {
  //       alert('Push registration success, token: ' + token.value);
  //     },
  //   );

  //   PushNotifications.addListener('registrationError', (error: any) => {
  //     alert('Error on registration: ' + JSON.stringify(error));
  //   });

  //   PushNotifications.addListener(
  //     'pushNotificationReceived',
  //     (notification: PushNotification) => {
  //       alert('Push received: ' + JSON.stringify(notification));
  //     },
  //   );

  //   PushNotifications.addListener(
  //     'pushNotificationActionPerformed',
  //     (notification: PushNotificationActionPerformed) => {
  //       alert('Push action performed: ' + JSON.stringify(notification));
  //     },
  //   );
  // }
}
