import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-checkbox',
  templateUrl: './componente-checkbox.page.html',
  styleUrls: ['./componente-checkbox.page.scss'],
})
export class ComponenteCheckboxPage implements OnInit {
  meses : any[] = [
    {nomeDoMes : 'Janeiro', valor : 1, marcado : false},
    {nomeDoMes : 'Fevereiro', valor : 2, marcado : true},
    {nomeDoMes : 'Março', valor : 3, marcado : true},
    {nomeDoMes : 'Abril', valor : 4, marcado : false},
    {nomeDoMes : 'Maio', valor : 5, marcado : false},
    {nomeDoMes : 'Junho', valor : 6, marcado : true},
    {nomeDoMes : 'Julho', valor : 7, marcado : true},
    {nomeDoMes : 'Agosto', valor : 8, marcado : true},
    {nomeDoMes : 'Setembro', valor : 9, marcado : false},
    {nomeDoMes : 'Outubro', valor : 10, marcado : true},
    {nomeDoMes : 'Novembro', valor : 11, marcado : false},
    {nomeDoMes : 'Dezembro', valor : 12, marcado : true},
  ];
  constructor() { }

  ngOnInit() {
    console.log(this.meses);
  }

  exibirMeses(){
    console.table(this.meses)
  }
}
