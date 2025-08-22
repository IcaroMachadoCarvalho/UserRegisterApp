import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development.js';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  apiAcess = environment.apiUrl;

  verifyLocalAcess() {
    return this.isTokenExpired(this.getLocalData() || '');
  }

  logInAccount(user: any) {
    return this.http.post<any>(`${this.apiAcess}/users/login`, user);
  }

  setLocalAcess(token: string) {
    localStorage.setItem('user', token);
  }

  logOutAccount() {
    localStorage.removeItem('user');
  }

  getLocalData() {
    return localStorage.getItem('user');
  }

  private isTokenExpired(token: string) {
    const decodedToken: any = jwtDecode(token);
    const exp = decodedToken.exp;
    const currentTime = Math.floor(Date.now() / 1000);
    return currentTime < exp;
  }
}
