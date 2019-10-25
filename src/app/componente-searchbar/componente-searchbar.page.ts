import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-searchbar',
  templateUrl: './componente-searchbar.page.html',
  styleUrls: ['./componente-searchbar.page.scss'],
})
export class ComponenteSearchbarPage implements OnInit {

  nome : string ='';
  pessoas : any;
  pessoasFiltradas : any;
  constructor() { 
    this.pessoas =[
      { id: 1, idade: 13, nome: "Paulo" },
      { id: 2, idade: 18, nome: "Paula" },
      { id: 3, idade: 23, nome: "Ana Paula" },
      { id: 4, idade: 43, nome: "Paulo Rogério" },
      { id: 5, idade: 29, nome: "Thiago" },
      { id: 6, idade: 36, nome: "Agatha" },
      { id: 7, idade: 89, nome: "Rafael" },
      { id: 8, idade: 64, nome: "Fernanda" },
      { id: 9, idade: 31, nome: "Maria Paula" },
      { id: 10, idade: 25, nome: "Ana" },
      { id: 11, idade: 21, nome: "Ricardo" },
    ];

    this.pessoasFiltradas = this.pessoas;
  }

  ngOnInit() {
  }

  filtraItens(){
    this.pessoasFiltradas = this.filtrarPessoas(this.nome);
  }

  filtrarPessoas(nome){
    this.pessoasFiltradas = this.pessoas;
    return this.pessoasFiltradas.filter((item)=>{
      return item.nome.toLowerCase().includes(nome.toLowerCase());
    });
  }
}
