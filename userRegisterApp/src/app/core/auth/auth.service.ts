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

  logInAccount(user: any) {
    return this.http.post<any>(`${this.apiAcess}/users/login`, user);
  }

  signUpAccount(user: any) {
    return this.http.post<any>(`${this.apiAcess}/users/signup`, user);
  }

  forgotAcess(user: any) {
    return this.http.post<any>(`${this.apiAcess}/users/forgot-password`, user);
  }

  resetAcess(user: any) {
    return this.http.post<any>(`${this.apiAcess}/users/reset-password`, user);
  }

  verifyLocalAcess() {
    const token = this.getLocalData(); // Obtém o token primeiro

    // Verifica se o token existe antes de tentar decodificá-lo
    if (!token) {
      return false;
    }

    return this.isTokenExpired(token);
  }

  setLocalAcess(token: string) {
    localStorage.setItem('user', token);
  }

  logOutAccount() {
    localStorage.removeItem('user');
  }

  getLocalData() {
    return localStorage.getItem('user') || '';
  }

  private isTokenExpired(token: string) {
    const decodedToken: any = jwtDecode(token);
    const exp = decodedToken.exp;
    const currentTime = Math.floor(Date.now() / 1000);
    return currentTime < exp;
  }
}
