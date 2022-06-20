import { Component, OnInit } from '@angular/core'; 
import { Observable, of } from 'rxjs';
import { IMenu } from 'src/app/interface/IMenu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuList: Observable<IMenu[]> = new  Observable<IMenu[]>();
  List:Array<IMenu> =  [
    {text:'Administração',icon:'face',routerLink:'',children:[]},
    {text:'negocio',icon:'work',routerLink:'',
      children:[{text:'catalogo',icon:'cases',routerLink:''}]
    }
  ];
  constructor() { }

  ngOnInit() {
   
    this.menuList = of(this.List);   
  }
}
