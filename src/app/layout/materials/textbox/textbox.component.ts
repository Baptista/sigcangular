import { Component, OnInit,Input,Output, EventEmitter,SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFormField } from 'src/app/interface/IFormField';
@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css'],

})
export class TextboxComponent implements OnInit {

  @Input() input: IFormField;
  @Input() form:FormGroup;
  //@Output() outputdata = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }

  get f(){
    return this.form.controls;
  }
/*
  onchange(e:any) {
    console.warn(e.target.value)
    this.outputdata.emit(e.target.value);
  }
*/
}



    
