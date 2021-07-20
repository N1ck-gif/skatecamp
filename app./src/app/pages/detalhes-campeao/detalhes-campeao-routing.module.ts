import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesCampeaoPage } from './detalhes-campeao.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesCampeaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesCampeaoPageRoutingModule {}
