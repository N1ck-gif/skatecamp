import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-campeao',
  templateUrl: './card-campeao.component.html',
  styleUrls: ['./card-campeao.component.scss'],
})
export class CardCampeaoComponent implements OnInit {

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('campeoes') public campeoes: any;

  constructor() { }

  ngOnInit() { }


}
