import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-lista',
  templateUrl: './componente-lista.page.html',
  styleUrls: ['./componente-lista.page.scss'],
})
export class ComponenteListaPage implements OnInit {

  frutas : any[] = [{nome : 'Laranja', alt : 'light'},{nome : 'Morango', alt : 'medium'},{nome : 'Vinha', alt : 'light'},{nome : 'Tomate', alt : 'medium'}];

  constructor() { }

  ngOnInit() {
  }

}
