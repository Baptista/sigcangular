import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IFormField } from 'src/app/interface/IFormField';
import { ReturnEntity } from 'src/app/model/ReturnEntity';
import { SettingValuesModel } from 'src/app/model/SettingValuesModel';
import { VwSettingValuesFilterRequest } from 'src/app/model/VwSettingValuesFilterRequest';
import { HttpService } from 'src/app/service/http/http.service';
import { apiPath } from 'src/environments/environment';
import { DialogComponent } from '../../materials/dialog/dialog.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {

  formFields:Array<IFormField>;
  form: FormGroup ;
  label:string;
  request : VwSettingValuesFilterRequest = new VwSettingValuesFilterRequest();
  resultapi :any;
  resultapi2 :ReturnEntity;
  nResults:number;
  displayedColumns: {Name:string,Value:string}[];
  elements: any[] = [];

  constructor(public httpService:HttpService,public dialog: MatDialog) { }
 

  ngOnInit() {
    this.displayedColumns = [{Name:"Tipo",Value:"settDescription"},
                            {Name:"Aplicação",Value:"applicationId"},
                            {Name:"Nome",Value:"setName"},
                            {Name:"Valor",Value:"setvValue"},
                            {Name:"Data Início",Value:"setvBeginDate"},
                            {Name:"Data Fim",Value:"setvEndDate"},
                            {Name:"Unid.Negócio",Value:"businessUnitId"}];
   
    this.label = "Pesquisa";
    this.formFields = [
      { type: 'select', label: 'Unidade de Négocio', id:'unitid', options:[]},
      { type: 'select', label: 'Tipo', id:'typeid', options:[]},    
      { type: 'select', label: 'Aplicação', id:'applicationid', options:[]},
      { type: 'select', label: 'Nome', id:'nameid', options:[]},
      { type: 'select', label: 'Data Início', id:'datestartid', options:['=','>=','<=','<','>','<>']},
      { type: 'datepicker', label: '', id:'datestartpickerid', options:[]},
      { type: 'select', label: 'Data Fim', id:'dateendid', options:['=','>=','<=','<','>','<>']},
      { type: 'datepicker', label: '', id:'dateendpickerid', options:[]},
      { type: 'checkbox', label: 'Incluir Parâmetros Inactivos', id:'inactiveid', options:[]},
      { type: 'checkbox', label: 'Incluir Parâmetros Base', id:'baseid', options:[]}
   ];
   this.form= new FormGroup( {   
    unitid:new FormControl(), 
    typeid:new FormControl(),
    applicationid:new FormControl(),
    nameid:new FormControl(),
    datestartid:new FormControl(),
    datestartpickerid:new FormControl(), 
    dateendid:new FormControl(),
    dateendpickerid:new FormControl(),
    inactiveid:new FormControl(),
    baseid:new FormControl()
  });

  }

  GetTableData(body:VwSettingValuesFilterRequest){
    return this.httpService.post(apiPath.setting,JSON.stringify(body)).subscribe(x=>{
      
      let data :ReturnEntity = x as ReturnEntity;
      console.log(data);
      
      if(!data.returnStatusInformation.success){
        this.dialog.open(DialogComponent,{data:data.returnStatusInformation.message});
      }else{
        this.nResults = data.returnValue.totalCount;
        this.elements = data.returnValue.elements;

      }
    });     
  }
  onFind(data:any){
    console.log(data);
    this.request.BusinessUnitId = 999;
    this.request.PaginationCount = 0;
    this.request.PaginationPage = 0;
    this.resultapi = this.GetTableData(this.request);
    
  }
  
  
}
