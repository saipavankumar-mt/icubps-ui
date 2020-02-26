import { Component, OnInit, Input } from '@angular/core';
import { CardConfig } from './card.config';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() product: CardConfig['data'];

  constructor() { }

  ngOnInit(): void {
    if (!this.product.imgUrl) {
      this.product.imgUrl = './assets/images/no-image-available.png';
    }
  }

}
