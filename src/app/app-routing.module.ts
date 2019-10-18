import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { 
    path: 'instalacao', 
    loadChildren: './instalacao/instalacao.module#InstalacaoPageModule' 
  },
  { 
    path: 'layout', 
    loadChildren: './layout/layout.module#LayoutPageModule' 
  },
  { 
    path: 'layout-header-footer', 
    loadChildren: './layout-header-footer/layout-header-footer.module#LayoutHeaderFooterPageModule' 
  },
  {
    path: '',
    loadChildren: () => import('./layout-tabs/layout-tabs.module').then(m => m.LayoutTabsPageModule)
  },
  { 
    path: 'layout-menu', 
    loadChildren: './layout-menu/layout-menu.module#LayoutMenuPageModule' 
  },
  {  
    path: 'layout-split-pane', 
    loadChildren: './layout-split-pane/layout-split-pane.module#LayoutSplitPanePageModule' 
  },
  { path: 'notificacao', loadChildren: './notificacao/notificacao.module#NotificacaoPageModule' },
  { path: 'layout-grid', loadChildren: './layout-grid/layout-grid.module#LayoutGridPageModule' },
  { path: 'layout-css-utilities', loadChildren: './layout-css-utilities/layout-css-utilities.module#LayoutCssUtilitiesPageModule' },  { path: 'componente', loadChildren: './componente/componente.module#ComponentePageModule' },
  { path: 'componente-action-sheet', loadChildren: './componente-action-sheet/componente-action-sheet.module#ComponenteActionSheetPageModule' },
  { path: 'componente-alert', loadChildren: './componente-alert/componente-alert.module#ComponenteAlertPageModule' },
  { path: 'componente-badges', loadChildren: './componente-badges/componente-badges.module#ComponenteBadgesPageModule' },
  { path: 'componente-button', loadChildren: './componente-button/componente-button.module#ComponenteButtonPageModule' },
  { path: 'componente-card', loadChildren: './componente-card/componente-card.module#ComponenteCardPageModule' },
  { path: 'componente-checkbox', loadChildren: './componente-checkbox/componente-checkbox.module#ComponenteCheckboxPageModule' },
  { path: 'componente-radio', loadChildren: './componente-radio/componente-radio.module#ComponenteRadioPageModule' },
  { path: 'componente-date-time', loadChildren: './componente-date-time/componente-date-time.module#ComponenteDateTimePageModule' },
  { path: 'componente-fab', loadChildren: './componente-fab/componente-fab.module#ComponenteFabPageModule' },
  { path: 'componente-input', loadChildren: './componente-input/componente-input.module#ComponenteInputPageModule' },
  { path: 'componente-lista', loadChildren: './componente-lista/componente-lista.module#ComponenteListaPageModule' },
  { path: 'componente-loading', loadChildren: './componente-loading/componente-loading.module#ComponenteLoadingPageModule' },
  { path: 'componente-modal', loadChildren: './componente-modal/componente-modal.module#ComponenteModalPageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
