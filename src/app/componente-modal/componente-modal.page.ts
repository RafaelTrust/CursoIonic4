import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-componente-modal',
  templateUrl: './componente-modal.page.html',
  styleUrls: ['./componente-modal.page.scss'],
})
export class ComponenteModalPage implements OnInit {

  constructor(private modalCtrl : ModalController, private alertCtrl: AlertController) { }

  ngOnInit() {
    
  }



  async showModal() {
    const modal = await this.modalCtrl.create({
    component: ModalPage,
    componentProps: { value : '123' },
    backdropDismiss: true,
    showBackdrop: true
    });

    modal.onDidDismiss().then( async (responseModal: OverlayEventDetail) =>{
      if(responseModal != null){
        let data = await this.alertCtrl.create({
          header:"Curso Ionic 4",
          message: 'Valor recebido da pagina foi '+ responseModal.data.value
        });
        return await data.present();
      }
    });

    return await modal.present();
  
  }
}
