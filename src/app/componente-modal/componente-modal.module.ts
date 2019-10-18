import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponenteModalPage } from './componente-modal.page';
import { ModalPage } from '../modal/modal.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponenteModalPage, ModalPage],
  entryComponents: [ModalPage]
})
export class ComponenteModalPageModule {}
