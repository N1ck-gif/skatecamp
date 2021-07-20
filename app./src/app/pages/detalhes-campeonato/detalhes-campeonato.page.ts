import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalhes-campeonato',
  templateUrl: './detalhes-campeonato.page.html',
  styleUrls: ['./detalhes-campeonato.page.scss'],
})
export class DetalhesCampeonatoPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

}
