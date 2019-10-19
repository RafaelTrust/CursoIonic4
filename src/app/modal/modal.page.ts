import { ModalController, NavParams, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private navParam : NavParams, private alertController : AlertController, public modalController: ModalController) { }

  async ngOnInit() {
    let value = this.navParam.get('value');

    const alert = await this.alertController.create({
      header: 'Seja Bem Vindo',
      message: 'O Valor passado para essa pagina foi ' + value,
      buttons: ['OK']
    });

    await alert.present();

  }

  

  async closeModal() {
    this.modalController.dismiss({value : 234});
  }
}
