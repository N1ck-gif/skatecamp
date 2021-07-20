import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesCampeonatoPage } from './detalhes-campeonato.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesCampeonatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesCampeonatoPageRoutingModule {}
