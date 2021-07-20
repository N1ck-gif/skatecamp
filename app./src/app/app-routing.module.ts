import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },
  {
    path: 'detalhes-campeonato',
    loadChildren: () => import('./pages/detalhes-campeonato/detalhes-campeonato.module').then( m => m.DetalhesCampeonatoPageModule)
  },
  {
    path: 'detalhes-campeao',
    loadChildren: () => import('./pages/detalhes-campeao/detalhes-campeao.module').then( m => m.DetalhesCampeaoPageModule)
  },
  {
    path: 'tutorial2',
    loadChildren: () => import('./pages/tutorial2/tutorial2.module').then( m => m.Tutorial2PageModule)
  },
  {
    path: 'tutorial3',
    loadChildren: () => import('./pages/tutorial3/tutorial3.module').then( m => m.Tutorial3PageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
