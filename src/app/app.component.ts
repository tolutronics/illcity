import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate:any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.navigate =
    [
      {
        title : "Home",
        url   : "/dashboard",
        icon  : "home"
      },
      {
        title : "Services",
        url   : "/services",
        icon  : "restaurant"
      },
      {
        title : "Contact Us",
        url   : "/contact",
        icon  : "mail"
      },
      {
        title : "About",
        url   : "/about",
        icon  : "time"
      },
      {
        title : "Gallery",
        url   : "/gallery",
        icon  : "image"
      },
      {
        title : "Logout",
        url   : "/logout",
        icon  : "log-out"
      },
    ]
   
  }
  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
