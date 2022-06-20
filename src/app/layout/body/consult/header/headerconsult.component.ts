import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerconsult',
  templateUrl: './headerconsult.component.html',
  styleUrls: ['./headerconsult.component.css']
})
export class HeaderConsultComponent implements OnInit {

  NResults : string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
