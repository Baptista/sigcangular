import { Component,Input, OnInit } from '@angular/core';
import { IFormField } from 'src/app/interface/IFormField';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../materials/dialog/dialog.component';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchFormComponent {

  @Input() formFields:Array<IFormField> = [
 
    { type: 'textbox', label: 'Name', id:'id', options:[]},
    { type: 'textbox', label: 'Name2', id:'id2', options:[]},    
    {type: 'datepicker', label: 'Data', id:'id4', options:[]},
    {type: 'select', label: 'select', id:'id5', options:['select1', 'select2', 'select3']},
    { type: 'checkbox', label: 'Name3', id:'id3', options:[]}
   
  ];
 
  form: FormGroup = new FormGroup( {   
    id:new FormControl('',[Validators.required , Validators.minLength(4)]), 
    id2:new FormControl('',Validators.required),
    id3:new FormControl(),
    id4:new FormControl(),
    id5:new FormControl()
  } );

  constructor(public dialog: MatDialog) {}


  onSubmit() {
    this.dialog.open(DialogComponent);
    console.warn(this.form.value);
  }

}
