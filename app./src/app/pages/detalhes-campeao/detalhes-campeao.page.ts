import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalhes-campeao',
  templateUrl: './detalhes-campeao.page.html',
  styleUrls: ['./detalhes-campeao.page.scss'],
})
export class DetalhesCampeaoPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

}
