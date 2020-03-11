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
        subTitle: 'Starts @ $259/-'
      },
      {
        imgUrl: 'assets/images/tshirts.JPG',
        title: 'PRINTED T-SHIRTS',
        subTitle: 'Starts @ $259/-'
      },
      {
        imgUrl: 'assets/images/addresslabels.JPG',
        title: 'ADDRESS LABELS',
        subTitle: 'Starts @ $259/-'
      },
      {
        imgUrl: 'assets/images/billbooks.JPG',
        title: 'BILL BOOKS',
        subTitle: 'Starts @ $259/-'
      },
      {
        imgUrl: 'assets/images/bussinesscards.JPG',
        title: 'BUSINESS CARDS',
        subTitle: 'Starts @ $259/-'
      },
      {
        imgUrl: 'assets/images/cashreceipts.JPG',
        title: 'CASH RECEIPTS',
        subTitle: 'Starts @ $259/-'
      },
      {
        imgUrl: 'assets/images/envelopes.JPG',
        title: 'ENVELOPES',
        subTitle: 'Starts @ $259/-'
      },
      {
        imgUrl: 'assets/images/gifts.JPG',
        title: 'GIFTS',
        subTitle: 'Starts @ $259/-'
      },
      {
        imgUrl: 'assets/images/letterheads.JPG',
        title: 'LETTER HEADS',
        subTitle: 'Starts @ $259/-'
      },
      {
        imgUrl: 'assets/images/notepads.JPG',
        title: 'NOTEPADS',
        subTitle: 'Starts @ $259/-'
      },
      {
        imgUrl: 'assets/images/payementvouchers.JPG',
        title: 'PAYMENT VOUCHERS',
        subTitle: 'Starts @ $259/-'
      },
      {
        imgUrl: 'assets/images/prescriptionpads.JPG',
        title: 'PRESCRIPTION PADS',
        subTitle: 'Starts @ $259/-'
      }
    ];
  }
}
