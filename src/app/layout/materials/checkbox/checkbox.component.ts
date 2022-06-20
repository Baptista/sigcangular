import { Component, OnInit,Input } from '@angular/core';
import { IFormField } from 'src/app/interface/IFormField';
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @Input() input: IFormField;
  constructor() { }

  ngOnInit(): void {
  }

}
