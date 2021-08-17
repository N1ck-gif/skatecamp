import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-campeonato',
  templateUrl: './card-campeonato.component.html',
  styleUrls: ['./card-campeonato.component.scss'],
})
export class CardCampeonatoComponent implements OnInit {

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('campeonatos') public campeonatos: any;

  constructor() { }

  ngOnInit() { }

}
