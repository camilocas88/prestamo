import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl = 'http://localhost:3000/User';
  currentUser: User = {
    id: null,
    name: '',
    email: '',
    cc: null,
    valueLoan: null,
    DatePayment: null,
    creditStatus: '',
    creditPayment: '',
  };

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl, headerOption);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.baseUrl}/${id}`, headerOption);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  payUser(id: number, user: User): Observable<User> {
    return this.http.put(`${this.baseUrl}/${id}`, user, headerOption);
  }

  create(user): Observable<User> {
    return this.http.post<User>(
      `${this.baseUrl}`,
      JSON.stringify(user),
      headerOption
    );
  }
}
