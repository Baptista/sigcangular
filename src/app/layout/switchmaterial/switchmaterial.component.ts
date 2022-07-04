import { Component, OnInit,Input } from '@angular/core';
import { IFormField } from 'src/app/interface/IFormField';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-switchmaterial',
  templateUrl: './switchmaterial.component.html',
  styleUrls: ['./switchmaterial.component.css']
})
export class SwitchMaterialComponent {

  @Input() input: IFormField;
  @Input() form: FormGroup;
  
  getvalues(e:any){
    console.warn(e);
  }

  get f(){
    return this.form.controls;
  }
}
