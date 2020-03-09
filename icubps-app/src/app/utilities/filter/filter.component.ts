import { Component, OnInit, Input } from '@angular/core';
import { FilterConfig } from './filter.config';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() filterData: FilterConfig;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    const formControls = this.filterData.items.map(control => new FormControl(false));

    this.form = this.formBuilder.group({
      items: new FormArray(formControls)
    });
  }



}
