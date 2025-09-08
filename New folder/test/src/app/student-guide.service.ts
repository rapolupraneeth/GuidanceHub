import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentGuideService {


  apiUrl = 'http://localhost:8080'; // replace with your API URL

  constructor(private http: HttpClient) { }

  postData(data: any) {
    return this.http.post(this.apiUrl+"/signup", data);
  }

  login(data: any) {
    return this.http.post(this.apiUrl+"/signin", data);
  }

}
