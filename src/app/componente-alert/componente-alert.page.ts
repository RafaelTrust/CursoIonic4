import { Component, OnInit, ErrorHandler } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-componente-alert',
  templateUrl: './componente-alert.page.html',
  styleUrls: ['./componente-alert.page.scss'],
})
export class ComponenteAlertPage implements OnInit {

  constructor(private componenteAlert : AlertController) { }

  ngOnInit() {
  }

  async abrirAlertSimples(){
    let alerta = await this.componenteAlert.create({
      header : 'Alert Simples',
      subHeader: 'Sub Header',
      message : 'Essa é uma mensagem teste para alert simples!',
      buttons : ['OK']
    });

    await alerta.present();
  }

  async alertMultButoes(){
    let alerta = await this.componenteAlert.create({
      header : 'Alert de Varios Butões',
      message : 'Essa é uma mensagem teste!',
      buttons : ['Cancelar','Abrir Modal', 'Excluir']
    });

    await alerta.present();
  }

  async alertConfirmacao(){
    let alerta = await this.componenteAlert.create({
      header : 'Confirmação',
      message : 'Deseja cancelar seu pedido <b>XPTO<b>?',
      cssClass: 'secundary',
      buttons : [{
        text : 'Cancelar',
        role : 'cancel',
        cssClass : 'secundary',
        handler : ()=>{
          console.log("Pedido Cancelado: XPTO");
        }
      },
      {
        text : 'Pagar',
        handler : ()=>{
          console.log("Pago com Sucesso!");
        }
      }
    ]
    });

    await alerta.present();
  }

  async alertPrompt(){
    let alerta = await this.componenteAlert.create({
      header : 'Confirmação',
      inputs : [{
          name : 'Login',
          type : 'text',
          placeholder : 'Informe seu login',
        },
        {
          name : 'Senha',
          type : 'password',
          placeholder : 'Informe sua senha'
        }
      ],
      buttons : [{
          text : 'Novo',
          cssClass : 'secundary',
          role : 'cancel',
          handler : ()=>{
            console.log("Criado com Sucesso!");
          }
        },
        {
          text : 'Entrar',
          handler : (data)=>{
            console.log("Seja Bem Vindo ", data);
          }
        }
      ]
    });

    await alerta.present();
  }

  async alertRadio(){
    let alerta = await this.componenteAlert.create({
      header: 'Radios',
      inputs : [{
          name : 'radio1',
          type : 'radio',
          label : 'Radio 1',
          value : 'radio1',
          checked : true
        },
        {
          name : 'radio2',
          type : 'radio',
          label : 'Radio 2',
          value : 'radio2'
        },
        {
          name : 'radio3',
          type : 'radio',
          label : 'Radio 3',
          value : 'radio3'
        },
        {
          name : 'radio4',
          type : 'radio',
          label : 'Radio 4',
          value : 'radio4'
        },
        {
          name : 'radio5',
          type : 'radio',
          label : 'Radio 5',
          value : 'radio5'
        },
        {
          name : 'radio6',
          type : 'radio',
          label : 'Radio 6',
          value : 'radio6'
        },
      ],
      buttons : [{
          text : 'Cancelar',
          role : 'cancel',
          handler : ()=>{
            console.log("Cancelado");
          }
        },
        {
          text : 'Confirmar',
          cssClass : 'secundary',
          handler : (data)=>{
            console.log("Confirmado ", data);
          }
        }
      ]
    });
    await alerta.present();
  }

  async alertCheckBox(){
    let alerta = await this.componenteAlert.create({
      header: 'CheckBox',
      inputs : [{
          name : 'checkbox1',
          type : 'checkbox',
          label : 'Checkbox 1',
          value : 'checkbox1'
        },
        {
          name : 'checkbox2',
          type : 'checkbox',
          label : 'Checkbox 2',
          value : 'checkbox2'
        },
        {
          name : 'checkbox3',
          type : 'checkbox',
          label : 'Checkbox 3',
          value : 'checkbox3'
        },
        {
          name : 'checkbox4',
          type : 'checkbox',
          label : 'Checkbox 4',
          value : 'checkbox4'
        },
        {
          name : 'checkbox5',
          type : 'checkbox',
          label : 'Checkbox 5',
          value : 'checkbox5'
        },
        {
          name : 'checkbox6',
          type : 'checkbox',
          label : 'Checkbox 6',
          value : 'checkbox6'
        },
      ],
      buttons : [{
          text : 'Cancelar',
          role : 'cancel',
          handler : ()=>{
            console.log("Cancelado");
          }
        },
        {
          text : 'Confirmar',
          cssClass : 'secundary',
          handler : (data)=>{
            console.log("Confirmado ", data);
          }
        }
      ]
    });
    await alerta.present();
  }
}
