import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'https://freeapi.gerasim.in/api/User/Login'

  constructor(private http:HttpClient) { }

  addUser(user: Login): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, user);
  }
}
