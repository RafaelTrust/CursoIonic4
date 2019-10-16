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
  { path: 'layout-css-utilities', loadChildren: './layout-css-utilities/layout-css-utilities.module#LayoutCssUtilitiesPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
