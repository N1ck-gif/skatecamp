import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public campeoes: any = [
    {
      id: 1,
      foto: '/assets/img/c1.png',
      nome: 'Nicolas Santos',
      nomeCamp: 'Campeonato da Zona Ouro',
      categoria: 'Iniciante',
      local: 'SP - Jandira',
      data: '04/10'
    },
    {
      id: 2,
      foto: '/assets/img/campeao.png',
      nome: 'Kevin Norths',
      nomeCamp: 'Campeonato Inside Out',
      categoria: 'Iniciante',
      local: 'SP - Itapevi',
      data: '10/08'
    },
    {
      id: 3,
      foto: '/assets/img/c2.jpeg',
      nome: 'Pamela Rosa',
      nomeCamp: 'Campeonato SLS',
      categoria: 'Feminino - Profissional',
      local: 'SP - Centro',
      data: '24/05'
    },
    {
      id: 4,
      foto: '/assets/img/c3.jpeg',
      nome: 'Rayssa Leal',
      nomeCamp: 'Campeonato do Berrics',
      categoria: 'Feminino - Profissional',
      local: 'SP - Barra Funda',
      data: '22/07'
    },
    {
      id: 5,
      foto: '/assets/img/c4.jpeg',
      nome: 'Luan Oliveira',
      nomeCamp: 'Slides & Grinds',
      categoria: 'Profissional',
      local: 'SP - Sorocaba',
      data: '03/12'
    },
  ];

  constructor() {}

}
