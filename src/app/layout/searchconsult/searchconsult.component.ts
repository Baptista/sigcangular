import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-searchconsult',
  templateUrl: './searchconsult.component.html',
  styleUrls: ['./searchconsult.component.css']
})
export class SearchconsultComponent implements OnInit {

  @Input() label: string; 
  constructor() { }

  ngOnInit(): void {
  }

}
