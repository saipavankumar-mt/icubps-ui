import { Component, OnInit, Input } from '@angular/core';
import { CategoryDataConfig } from './categories-grid';

@Component({
  selector: 'app-categories-grid',
  templateUrl: './categories-grid.component.html',
  styleUrls: ['./categories-grid.component.css']
})
export class CategoriesGridComponent implements OnInit {
  @Input() categories: CategoryDataConfig[];

  constructor() {}
  ngOnInit(): void {}
}
