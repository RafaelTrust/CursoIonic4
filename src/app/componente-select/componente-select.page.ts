import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-select',
  templateUrl: './componente-select.page.html',
  styleUrls: ['./componente-select.page.scss'],
})
export class ComponenteSelectPage implements OnInit {
  customAlertOptions : any = {
    header: 'Pizzas',
    subHeader: 'Pizzas com melhores preços só aqui',
    message: 'Compre duas e vc leva 20% de desconto',
    translucent: true
  }

  customPopoverOptions : any = {
    header: 'Cidades',
    subHeader: 'cidades disponíveis',
    message: 'Escolha a cidade mais próxima de você'
  }

  customActionSheetOptions : any = {
    header: 'Cores',
    subHeader: 'cores de plano de fundo',
    message: 'Escolha a melhor cor de fundo'
  }
  constructor() { }

  ngOnInit() {
  }


}
