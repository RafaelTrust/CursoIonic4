import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TabsPageRoutingModule} from './layout-tabs.router.module'

import { IonicModule } from '@ionic/angular';

import { LayoutTabsPage } from './layout-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule
  ],
  declarations: [LayoutTabsPage]
})
export class LayoutTabsPageModule {}
