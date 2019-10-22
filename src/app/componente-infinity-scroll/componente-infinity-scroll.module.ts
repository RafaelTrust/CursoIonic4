import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponenteInfinityScrollPage } from './componente-infinity-scroll.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteInfinityScrollPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponenteInfinityScrollPage]
})
export class ComponenteInfinityScrollPageModule {}
