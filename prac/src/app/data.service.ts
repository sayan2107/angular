import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  constructor(private http: Http) {}

  fetchData(){
    this.http.get('assets/info.json').map(
      (response) => response.json()
    ).subscribe(
      (data) => console.log(data)
    )
  }
  obj = {
    id:1,
    name:"sayan"
  }

 success(){
    return "success";
 }
}
