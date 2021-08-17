import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial3',
  templateUrl: './tutorial3.page.html',
  styleUrls: ['./tutorial3.page.scss'],
})
export class Tutorial3Page implements OnInit {

  constructor(
    private navController: NavController
  ) { }

  ngOnInit() {
  }

  navegar() {
    this.navController.navigateRoot('/tabs');
  }

}
