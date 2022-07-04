import { Component, OnInit,Input } from '@angular/core';
import { IFormField } from 'src/app/interface/IFormField';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-panelform',
  templateUrl: './panelform.component.html',
  styleUrls: ['./panelform.component.css']
})
export class PanelformComponent implements OnInit {

  @Input() titlepanel:any= null;
  @Input() formFields:Array<IFormField> = [];
  @Input() form: FormGroup;
    
  constructor() { }

  ngOnInit(): void {
  }

}
