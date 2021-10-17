import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
// Url = "https://fakestoreapi.com/products/";
  Products(): Observable<any>{
    return this.http.get("https://fakestoreapi.com/products/")
    .pipe(map((res:any) => {
      return res;
    }))
  }
}
