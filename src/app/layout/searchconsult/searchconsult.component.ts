import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFormField } from 'src/app/interface/IFormField';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-searchconsult',
  templateUrl: './searchconsult.component.html',
  styleUrls: ['./searchconsult.component.css']
})
export class SearchconsultComponent implements OnInit {

  @Input() label: string;
  @Input() formFields:Array<IFormField> ;
  @Input () form: FormGroup;
  @Output() out = new EventEmitter<any>();
  panelOpenState: boolean = true;
  constructor() { }

  ngOnInit(): void {

  }
  onFind(data:any){
    this.panelOpenState = false;
    this.out.emit(data);
  }
}
