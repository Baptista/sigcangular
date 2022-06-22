import { Component, OnInit,Input } from '@angular/core';
import { IFormField } from 'src/app/interface/IFormField';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() input: IFormField;
  @Input() form:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
