import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesCampeonatoPageRoutingModule } from './detalhes-campeonato-routing.module';

import { DetalhesCampeonatoPage } from './detalhes-campeonato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesCampeonatoPageRoutingModule
  ],
  declarations: [DetalhesCampeonatoPage]
})
export class DetalhesCampeonatoPageModule {}
