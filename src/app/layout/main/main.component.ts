import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  toDisplay = false;
  constructor() { }

  ngOnInit(): void {
  }

  Toggle(){
      this.toDisplay = !this.toDisplay;
  }

}
