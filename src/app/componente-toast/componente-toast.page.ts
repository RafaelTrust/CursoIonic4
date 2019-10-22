import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-componente-toast',
  templateUrl: './componente-toast.page.html',
  styleUrls: ['./componente-toast.page.scss'],
})
export class ComponenteToastPage implements OnInit {

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async showToast(){
    let toast = await this.toastCtrl.create({
      message:'Enviado com Sucesso',
      duration: 2000
    })

    return await toast.present();
  }

  async showToastPosition(posicao : any){
    let toast = await this.toastCtrl.create({
      message:'Enviado com Sucesso',
      duration: 2000,
      position: posicao
    })

    return await toast.present();
  }

  async showToastButtom(posicao : any){
    let toast = await this.toastCtrl.create({
      message:'Enviado com Sucesso',
      position: posicao,
      showCloseButton : true
    })

    return await toast.present();
  }

  async showToastButtomText(posicao : any){
    let toast = await this.toastCtrl.create({
      message:'Enviado com Sucesso',
      position: posicao,
      showCloseButton : true,
      closeButtonText : 'Fechar',
      color: 'danger'
    })

    return await toast.present();
  }

  async showToastButtomTextLong(posicao : any){
    let toast = await this.toastCtrl.create({
      message:'Enviado com Sucesso Enviado com Sucesso Enviado com Sucesso Enviado com Sucesso Enviado com Sucesso Enviado com Sucesso Enviado com Sucesso Enviado com Sucesso Enviado com Sucesso Enviado com Sucesso',
      position: posicao,
      showCloseButton : true,
      closeButtonText : 'Fechar',
      color: 'success'
    })

    return await toast.present();
  }

  async showToastButtomTextTranslucent(posicao : any){
    let toast = await this.toastCtrl.create({
      message:'Enviado com Sucesso',
      position: posicao,
      showCloseButton : true,
      closeButtonText : 'Fechar',
      translucent : true
    })

    return await toast.present();
  }
}
