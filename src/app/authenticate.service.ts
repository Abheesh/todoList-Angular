import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  public currentUser;
  private baseUrl = 'https://engine-staging.viame.ae/assessment';

  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }
  login(data) {
    return this.http.post<any>(`${this.baseUrl}/login`, {users: {email: data.email, password: data.pwd}})
    .pipe(map(user => {
      if (user.token) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUser = user;
      }
      return user;
  }));
    
  }
  register(data) {
    return this.http.post(`${this.baseUrl}/users`, {users: {email: data.email, password: data.pwd}});
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUser = null;

  }
}
