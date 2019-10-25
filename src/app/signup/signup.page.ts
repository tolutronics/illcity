import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController, IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  @ViewChild('slides', {static:true}) slider: IonSlides;
  segment = 0;
  SwipedTabsIndicator :any= null;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  login(){
    this.router.navigate(['/home'])
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

}
