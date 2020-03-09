import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { FiltersData } from './filters.config';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Input() filtersData: FiltersData;

  constructor() {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.filtersData = {
      data: [
        {
          category: 'Color',
          items: [
            {
              name: 'Blue',
              count: '4'
            },
            {
              name: 'Red',
              count: '1'
            },
            {
              name: 'White',
              count: '7'
            }
          ]
        },
        {
          category: 'Gender',
          items: [
            {
              name: 'Men',
              count: '4'
            },
            {
              name: 'Women',
              count: '1'
            },
            {
              name: 'Unisex',
              count: '7'
            }
          ]
        }
      ]
    };
  }
}
