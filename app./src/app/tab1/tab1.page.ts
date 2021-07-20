import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public campeonatos: any = [
    {
      id: 1,
      foto: '/assets/img/vans.png',
      nome: 'Campeonato da Vans',
      local: 'SP - Parque Villa Lobos',
      hora: '14:00 - 18:00',
      data: '04/12'
    },
    {
      id: 2,
      foto: '/assets/img/skatepark2.jpeg',
      nome: 'Campeonato Inside Out',
      local: 'SP - Itapevi - Centro',
      hora: '08:00 - 13:00',
      data: '10/07'
    },
    {
      id: 3,
      foto: '/assets/img/skatepark3.jpeg',
      nome: 'Campeonato do Bela',
      local: 'SP - Osasco - Bela vista',
      hora: '13:00 - 18:00',
      data: '08/07'
    },
  ];

  constructor() {}

}
