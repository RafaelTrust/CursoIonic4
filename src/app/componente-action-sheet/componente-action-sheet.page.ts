import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-componente-action-sheet',
  templateUrl: './componente-action-sheet.page.html',
  styleUrls: ['./componente-action-sheet.page.scss'],
})
export class ComponenteActionSheetPage implements OnInit {

  constructor(private actionSheetCtrl : ActionSheetController) { }

  ngOnInit() {
  }

  async abrirActionSheet(){
    let actionSheet = await this.actionSheetCtrl.create({
      header : 'Cores',
      buttons : [{
        text : 'Vermelho',
        role : 'destructive',
        icon : 'trash',
        handler : ()=>{
          console.log("Vermelho");
        }
      }]
    });
    await actionSheet.present();
  }

  async abrirAlbum(){
    let actionSheet = await this.actionSheetCtrl.create({
      header : 'Album',
      buttons : [{
          text : 'Excluir',
          role : 'destructive',
          icon : 'trash',
          handler : ()=>{
            alert("Excluir");
        }
      },
      {
        text : 'Compartilhar',
        icon : 'share',
        handler : ()=>{
          alert("Compartilhar");
        }
      },
      {
        text : 'Assistir',
        icon : 'play',
        handler : ()=>{
          alert("Assistir");
        }
      },
      {
        text : 'Cancelar',
        icon : 'close',
        role : 'cancel',
        handler : ()=>{
          console.log("Cancelar");
        }
      }
    ]
    });
    await actionSheet.present();
  }
}
