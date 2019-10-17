import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.page.html',
  styleUrls: ['./componente.page.scss'],
})
export class ComponentePage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  onClick(valor : string){
    this.navCtrl.navigateForward(valor);
  }
}
