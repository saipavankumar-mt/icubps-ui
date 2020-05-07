import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  constructor() { }

  MaxRatings: number = 5;
  CurrentRating: number = 3;

  ratedStars: any[];
  unratedStars: any[];

  ratingStars: number[] = [1, 2, 3, 4, 5];

  ngOnInit(): void {
    this.loadData();
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }

  loadData(): void {
    this.ratedStars = this.arrayOne(this.CurrentRating);
    this.unratedStars = this.arrayOne(this.MaxRatings - this.CurrentRating);
  }




}
