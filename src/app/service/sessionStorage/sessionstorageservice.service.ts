import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionstorageserviceService {

  private session: Storage;
  private key: string = 'token';

  constructor( ) {
    this.session= window.sessionStorage;
   }  
  
  get(){
    return this.session.getItem(this.key);
  } 

  set(value:any){
    this.session.setItem(this.key,value);
  }

  clear(){
    this.session.clear();
  }

}
