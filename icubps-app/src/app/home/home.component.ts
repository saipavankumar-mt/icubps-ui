import { Component, OnInit } from '@angular/core';
import { CategoryDataConfig } from '../categories-grid/categories-grid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: CategoryDataConfig[];

  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.categories = [
      {
        imgUrl: 'assets/images/mug.JPG',
        title: 'PHOTO MUGS',
        subTitle: 'From',
        price: '259'
      },
      {
        imgUrl: 'assets/images/tshirts.JPG',
        title: 'PRINTED T-SHIRTS',
        subTitle: 'From',
        price: '399'
      },
      {
        imgUrl: 'assets/images/addresslabels.JPG',
        title: 'ADDRESS LABELS',
        subTitle: 'From',
        price: '150'
      },
      {
        imgUrl: 'assets/images/billbooks.JPG',
        title: 'BILL BOOKS',
        subTitle: 'From',
        price: '499'
      },
      {
        imgUrl: 'assets/images/bussinesscards.JPG',
        title: 'BUSINESS CARDS',
        subTitle: 'From',
        price: '150'
      },
      {
        imgUrl: 'assets/images/cashreceipts.JPG',
        title: 'CASH RECEIPTS',
        subTitle: 'From',
        price: '125'
      },
      {
        imgUrl: 'assets/images/envelopes.JPG',
        title: 'ENVELOPES',
        subTitle: 'From',
        price: '99'
      },
      {
        imgUrl: 'assets/images/gifts.JPG',
        title: 'GIFTS',
        subTitle: 'From',
        price: '399'
      },
      {
        imgUrl: 'assets/images/letterheads.JPG',
        title: 'LETTER HEADS',
        subTitle: 'From',
        price: '99'
      },
      {
        imgUrl: 'assets/images/notepads.JPG',
        title: 'NOTEPADS',
        subTitle: 'From',
        price: '99'
      },
      {
        imgUrl: 'assets/images/payementvouchers.JPG',
        title: 'PAYMENT VOUCHERS',
        subTitle: 'From',
        price: '159'
      },
      {
        imgUrl: 'assets/images/prescriptionpads.JPG',
        title: 'PRESCRIPTION PADS',
        subTitle: 'From',
        price: '199'
      }
    ];
  }
}
