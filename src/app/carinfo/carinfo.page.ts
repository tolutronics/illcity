import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController} from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-carinfo',
  templateUrl: './carinfo.page.html',
  styleUrls: ['./carinfo.page.scss'],
})
export class CarinfoPage implements OnInit {

  constructor(private router:Router, public lc: LoadingController, private alertCtrl: AlertController) { 

  

  }
  async Alert(msg, sub) {
    const alert = await this.alertCtrl.create({
    message: msg,
    subHeader: sub,
    buttons: [
      {
        text: 'OK',
        role: 'ok',
        handler: () => {
          this.router.navigate(['/home'])
        }
      }]
      })
    await alert.present();
}

  ngOnInit() {
  }

  finish(){

    this.lc.create({
      message: 'Creating Your Profile',
      duration: 2000
    }).then((resy) => {
      resy.present();
      
        resy.onDidDismiss().then((dis) => {
   this.Alert('You will be notified when your account has been verified', 'INFO');
      });


  })
  

}}
  



