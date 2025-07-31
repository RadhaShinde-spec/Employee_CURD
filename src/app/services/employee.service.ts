import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  login(userLogin:any):Observable<any>{
    return this.http.post('http://localhost:8080/login', userLogin)
  }

  register(registerData:any):Observable<any>{
    return this.http.post('http://localhost:8080/register',registerData);
  }

  getAll():Observable<any>{
    return this.http.get('http://localhost:8080/getAll');
  }
}
