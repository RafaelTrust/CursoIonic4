import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutTabsPage } from './layout-tabs.page';

const routes: Routes = [
  {
    path: 'layout-tabs',
    component: LayoutTabsPage,
    children: [
      {
        path: 'hometab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../hometab/hometab.module').then(m => m.HometabPageModule)
          }
        ]
      },
      {
        path: 'mapa',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../mapa/mapa.module').then(m => m.MapaPageModule)
          }
        ]
      },
      {
        path: 'notificacao',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../notificacao/notificacao.module').then(m => m.NotificacaoPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/layout-tabs/hometab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/layout-tabs/hometab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
