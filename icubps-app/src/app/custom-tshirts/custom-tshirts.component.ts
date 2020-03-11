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
        subTitle: 'RS 259/-'
      },
      {
        imgUrl: 'assets/images/2.jpg',
        title: 'White full sleeve Jacket',
        subTitle: 'RS 259/-'
      },
      {
        imgUrl: 'assets/images/3.jpg',
        title: 'Blue half sleeve Tshirt',
        subTitle: 'RS 159/-'
      },
      {
        imgUrl: 'assets/images/4.jpg',
        title: 'Blue half sleeve Tshirt',
        subTitle: 'RS 159/-'
      },
      {
        imgUrl: 'assets/images/5.jpg',
        title: 'Orange half sleeve Tshirt',
        subTitle: 'RS 159/-'
      },
      {
        imgUrl: 'assets/images/6.jpg',
        title: 'White half sleeve Tshirt',
        subTitle: 'RS 100/-'
      },
      {
        imgUrl: 'assets/images/7.jpg',
        title: 'Light Green Half sleeve Tshirt',
        subTitle: 'RS 159/-'
      }
    ];
  }
}
