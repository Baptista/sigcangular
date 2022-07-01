import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IFormField,IPanelFormField } from 'src/app/interface/IFormField';
@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.css']
})
export class CreateformComponent implements OnInit {

  @Input() panelFormField: Array<IPanelFormField> = [
    {label: 'user',
    fields: [{ type: 'textbox', label: 'Name', id:'id', options:[]},
              { type: 'textbox', label: 'Name', id:'id2', options:[]}]
    }

  ];

  @Input() formFields:Array<IFormField> = [
 
    { type: 'textbox', label: 'Name', id:'id', options:[]},
    { type: 'textbox', label: 'Name2', id:'id2', options:[]},    
    { type: 'datepicker', label: 'Data', id:'id4', options:[]},
    { type: 'select', label: 'select', id:'id5', options:['select1', 'select2', 'select3']},
    { type: 'checkbox', label: 'Name3', id:'id3', options:[]}
   
  ];
 
  form: FormGroup = new FormGroup( {   
    id:new FormControl('',[Validators.required , Validators.minLength(4)]), 
    id2:new FormControl('',Validators.required),
    id3:new FormControl(),
    id4:new FormControl(),
    id5:new FormControl()
  } );

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    
    console.warn(this.form.value);
  }

}
