import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IFormField,IPanelFormField } from 'src/app/interface/IFormField';
@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.css']
})
export class CreateformComponent implements OnInit {

  @Input() title: string;
  @Input() panelFormField: Array<IPanelFormField> = [
    {label: 'label1',
    fields: [{ type: 'textbox', label: 'Name', id:'id', options:[]},
              { type: 'textbox', label: 'Name', id:'id2', options:[]}]
    },{
      label: 'label2',
    fields: [{ type: 'textbox', label: 'Name', id:'id3', options:[]},
              { type: 'textbox', label: 'Name', id:'id4', options:[]}]
    }

  ];  
 
  form: FormGroup = new FormGroup( {   
    id:new FormControl('',[Validators.required , Validators.minLength(4)]), 
    id2:new FormControl('',Validators.required),
    id3:new FormControl(),
    id4:new FormControl()
  } );

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    
    console.warn(this.form.value);
  }

}
