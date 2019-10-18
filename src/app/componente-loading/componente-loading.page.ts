import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-componente-loading',
  templateUrl: './componente-loading.page.html',
  styleUrls: ['./componente-loading.page.scss'],
})
export class ComponenteLoadingPage implements OnInit {

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  async loadingDefault() {
    const loading = await this.loadingCtrl.create({
      message: 'Processando...',
      duration: 2000
    });
    await loading.present();
  }

  async loadingCostumizado(nome) {
    const loading = await this.loadingCtrl.create({
      spinner : nome,
      message: 'Pesando...',
      duration: 2000
    });
    await loading.present();
  }

  async loadingRequisicao() {
    const loading = await this.loadingCtrl.create({
      message: 'Simulando Requisição do Banco...',
      translucent : true
    });

    setTimeout (()=>{
      loading.dismiss();
      console.log("Requisição Feita!");
    }, 5000);

    await loading.present();
  }
}
