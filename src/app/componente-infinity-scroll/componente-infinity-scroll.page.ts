import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-infinity-scroll',
  templateUrl: './componente-infinity-scroll.page.html',
  styleUrls: ['./componente-infinity-scroll.page.scss'],
})
export class ComponenteInfinityScrollPage implements OnInit {

  numeros : any = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,
    32,33,34,35,36,37,38,39,40];
  
  limit : any = 10;

  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    console.log("Carregar mais 10");
    this.limit += 10;
    event.target.complete();
  }
}
