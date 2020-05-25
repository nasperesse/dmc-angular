import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../messaging-comp/shared/user';
import { Observable } from 'rxjs';
import { Response } from '../responses/Response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8081';
  private apiUrl = '/api';
  private userRoute = '/user';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  createUser(name: string, logo: string): Observable<Response> {
    const requestUrl = this.baseUrl + this.apiUrl + this.userRoute;
    const reqBody = { 'name': name, 'logo': logo};
    return this.http.post<Response>(requestUrl, reqBody, this.httpOptions);
  }
}
