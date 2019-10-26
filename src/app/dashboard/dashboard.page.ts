import { Component, OnInit } from '@angular/core';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
unilorin:boolean=false;
children:boolean=false;
town:boolean=false;
  constructor(public dialog:Dialogs,) { }

  ngOnInit() {
  }

  Sunilorin(){
    this.unilorin=true;
    this.children=false;
    this.town=false;

  }

  Schildren(){
    this.children=true;
    this.unilorin=false;
    this.town=false;

  }


  Stown(){

    this.town=true;
    this.unilorin=false;
    this.children=false;

  }

}
