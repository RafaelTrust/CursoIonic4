import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-refresher',
  templateUrl: './componente-refresher.page.html',
  styleUrls: ['./componente-refresher.page.scss'],
})
export class ComponenteRefresherPage implements OnInit {

  message="puxe para cima para atualizar!";

  constructor() { }

  ngOnInit() {
  }

  atualizarMensagem(event : any){
    setTimeout(()=>{
      this.message="Parabens você atualizou a pagina";
      event.target.complete();
    },2000);
  }
}
