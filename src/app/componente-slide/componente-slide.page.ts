import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-slide',
  templateUrl: './componente-slide.page.html',
  styleUrls: ['./componente-slide.page.scss'],
})
export class ComponenteSlidePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  comecar(){
    this.navCtrl.navigateForward("home");
  }
}
