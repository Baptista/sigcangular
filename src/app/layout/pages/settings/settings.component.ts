import { Component, OnInit } from '@angular/core';
import { VwSettingValuesFilterRequest } from 'src/app/model/VwSettingValuesFilterRequest';
import { HttpService } from 'src/app/service/http/http.service';
import { apiPath } from 'src/environments/environment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(public httpService:HttpService) { }

  setting : VwSettingValuesFilterRequest = new VwSettingValuesFilterRequest();
  resultapi :any;

  ngOnInit(): void {
    this.setting.BusinessUnitId = 999;
    this.setting.PaginationCount = 2;
    this.setting.PaginationPage = 2;
    this.GetAll(this.setting);
  }

  GetAll(body:VwSettingValuesFilterRequest){
    this.resultapi = this.httpService.postAll(apiPath.setting,JSON.stringify(body));
   
  }


}
