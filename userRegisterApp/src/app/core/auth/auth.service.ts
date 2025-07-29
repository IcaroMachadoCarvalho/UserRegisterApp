import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development.js';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  apiAcess = environment.apiUrl;

  verifyAcess() {
    const isLoggedIn = this.getLocalData() === "true";
    if(isLoggedIn){
      this.logInAccount();
    }

    // Fazer a requisição http
  }

  logInAccount() {
    localStorage.setItem("user", "true");
  }

  logOutAccount() {
    localStorage.removeItem("user");
  }

  getLocalData(){
    return localStorage.getItem("user");
  }
}
