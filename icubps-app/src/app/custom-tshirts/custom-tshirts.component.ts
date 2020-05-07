import { Component, OnInit } from '@angular/core';
import { CategoryDataConfig } from '../categories-grid/categories-grid';

@Component({
  selector: 'app-custom-tshirts',
  templateUrl: './custom-tshirts.component.html',
  styleUrls: ['./custom-tshirts.component.css']
})
export class CustomTshirtsComponent implements OnInit {

  categories: CategoryDataConfig[];
  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.categories = [
      {
        imgUrl: 'assets/images/1.jpg',
        title: 'Blue full sleeve TShirt',
        price: '259.00'
      },
      {
        imgUrl: 'assets/images/2.jpg',
        title: 'White full sleeve Jacket',
        price: '259.00'
      },
      {
        imgUrl: 'assets/images/3.jpg',
        title: 'Blue half sleeve Tshirt',
        price: '159.00'
      },
      {
        imgUrl: 'assets/images/4.jpg',
        title: 'Blue half sleeve Tshirt',
        price: '159.00'
      },
      {
        imgUrl: 'assets/images/5.jpg',
        title: 'Orange half sleeve Tshirt',
        price: '159.00'
      },
      {
        imgUrl: 'assets/images/6.jpg',
        title: 'White half sleeve Tshirt',
        price: '100.00'
      },
      {
        imgUrl: 'assets/images/7.jpg',
        title: 'Light Green Half sleeve Tshirt',
        price: '100.00'
      }
    ];
  }
}
