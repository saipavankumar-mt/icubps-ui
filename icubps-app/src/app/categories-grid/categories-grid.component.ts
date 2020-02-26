import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-categories-grid",
  templateUrl: "./categories-grid.component.html",
  styleUrls: ["./categories-grid.component.css"]
})
export class CategoriesGridComponent implements OnInit {
  constructor() {}
  categories: any = [
    {
      imgUrl: "assets/images/mug.JPG",
      title: "PHOTO MUGS",
      subTitle: "Starts @ $259/-"
    },
    {
      imgUrl: "assets/images/tshirts.JPG",
      title: "PRINTED T-SHIRTS",
      subTitle: "Starts @ $259/-"
    },
    {
      imgUrl: "assets/images/addresslabels.JPG",
      title: "ADDRESS LABELS",
      subTitle: "Starts @ $259/-"
    },
    {
      imgUrl: "assets/images/billbooks.JPG",
      title: "BILL BOOKS",
      subTitle: "Starts @ $259/-"
    },
    {
      imgUrl: "assets/images/bussinesscards.JPG",
      title: "BUSINESS CARDS",
      subTitle: "Starts @ $259/-"
    },
    {
      imgUrl: "assets/images/cashreceipts.JPG",
      title: "CASH RECEIPTS",
      subTitle: "Starts @ $259/-"
    },
    {
      imgUrl: "assets/images/envelopes.JPG",
      title: "ENVELOPES",
      subTitle: "Starts @ $259/-"
    },
    {
      imgUrl: "assets/images/gifts.JPG",
      title: "GIFTS",
      subTitle: "Starts @ $259/-"
    },
    {
      imgUrl: "assets/images/letterheads.JPG",
      title: "LETTER HEADS",
      subTitle: "Starts @ $259/-"
    },
    {
      imgUrl: "assets/images/notepads.JPG",
      title: "NOTEPADS",
      subTitle: "Starts @ $259/-"
    },
    {
      imgUrl: "assets/images/payementvouchers.JPG",
      title: "PAYMENT VOUCHERS",
      subTitle: "Starts @ $259/-"
    },
    {
      imgUrl: "assets/images/prescriptionpads.JPG",
      title: "PRESCRIPTION PADS",
      subTitle: "Starts @ $259/-"
    }
  ];
  ngOnInit(): void {}
}
