import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-componente-modal',
  templateUrl: './componente-modal.page.html',
  styleUrls: ['./componente-modal.page.scss'],
})
export class ComponenteModalPage implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {
  }

  async showModal() {
    const modal = await this.modalCtrl.create({
    component: ModalPage,
    componentProps: { value: 123 }
    });
  
    await modal.present();
  
  }
}
