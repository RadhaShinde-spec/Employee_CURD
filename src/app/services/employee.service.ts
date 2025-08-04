import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  login(userLogin: any): Observable<any> {
    return this.http.post('http://localhost:8080/login', userLogin)
  }

  register(registerData: any): Observable<any> {
    return this.http.post('http://localhost:8080/register', registerData);
  }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:8080/getAll');
  }

  deleteRecord(id: any): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/delete?id=${id}`);
  }

  getRecordById(id: any): Observable<any> {
    return this.http.get(`http://localhost:8080/getById?id=${id}`)
  }

  update(registerData: any): Observable<any> {
    return this.http.put('http://localhost:8080/update?', registerData)
  }
}
