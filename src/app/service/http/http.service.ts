import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {  Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { apiPath, environment } from 'src/environments/environment';
import { HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpOptions = {
    headers: new HttpHeaders({      
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
  
  
  getAll(path: apiPath, queryParams: HttpParams) {  
   this.httpClient.get(environment.apiURL+path,{responseType: 'text', params:queryParams})
    .pipe(catchError(this.errorHandler))
    .subscribe((data)=>{    
      console.log(data);
      return data;
    }
  );    
  }
  obsdata: Observable<any>;
  post(path: apiPath, body:string){
    return this.httpClient.post(environment.apiURL+path, body, this.httpOptions)
    .pipe(catchError(this.errorHandler));    
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
