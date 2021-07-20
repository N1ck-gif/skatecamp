import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public tab: string;

  constructor() {}

  ionViewWillEnter() {
    const url = window.location.href;
    this.tab = url.split('/').pop();
  }

  selectTab(tab: string) {
    this.tab = tab;
  }

}
