import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerconsult',
  templateUrl: './headerconsult.component.html',
  styleUrls: ['./headerconsult.component.css']
})
export class HeaderConsultComponent implements OnInit {

  @Input() NResults : number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
