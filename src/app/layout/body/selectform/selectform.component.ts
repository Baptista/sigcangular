import { Component, OnInit,Input } from '@angular/core';
import { IFormField } from 'src/app/interface/IFormField';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-selectform',
  templateUrl: './selectform.component.html',
  styleUrls: ['./selectform.component.css']
})
export class SelectformComponent {

  @Input() input: IFormField;
  @Input() form: FormGroup;
  
  getvalues(e:any){
    console.warn(e);
  }

  get f(){
    return this.form.controls;
  }
}
