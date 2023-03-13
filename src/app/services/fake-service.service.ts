import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FakeServiceService {

  constructor( private http: HttpClient ) { }


  fakeDataList(){
    return this.http.get('https://640f513a4ed25579dc4bf6c3.mockapi.io/fakedata');
  }
}
