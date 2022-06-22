import { Component, OnInit, Input } from '@angular/core';
import { IFormField } from 'src/app/interface/IFormField';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  @Input() form:FormGroup;
  @Input() input: IFormField;
  constructor() { }

  ngOnInit(): void {
  }

}
