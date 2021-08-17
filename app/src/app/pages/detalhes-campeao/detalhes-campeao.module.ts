import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesCampeaoPageRoutingModule } from './detalhes-campeao-routing.module';

import { DetalhesCampeaoPage } from './detalhes-campeao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesCampeaoPageRoutingModule
  ],
  declarations: [DetalhesCampeaoPage]
})
export class DetalhesCampeaoPageModule {}
