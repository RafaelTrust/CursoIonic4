import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  onClick(page : string){
    if(page == "header"){
      this.navCtrl.navigateForward("layout-header-footer");
    }else if(page == "tabs"){
      this.navCtrl.navigateForward("layout-tabs");
    }else if(page == "menu"){
      this.navCtrl.navigateForward("layout-menu");
    }else if(page == "split"){
      this.navCtrl.navigateForward("layout-split-pane");
    }else if(page == "grid"){
      this.navCtrl.navigateForward("layout-grid");
    }else if(page == "css"){
      this.navCtrl.navigateForward("layout-css-utilities");
    }
  }
}
