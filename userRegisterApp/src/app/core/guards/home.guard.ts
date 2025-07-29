import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { SnackbarService } from '../services/snackbar.service';

export const homeGuard: CanActivateFn = (route, state) => {
  // Versão funcional da guard versão 15+ angular
  const auth = inject(AuthService);
  const router = inject(Router);
  const notification = inject(SnackbarService);
  const isLoggedIn = auth.getLocalData() === 'true';
  if (!isLoggedIn) {
    notification.showMessage('not_logged_in');
  }
  return isLoggedIn ? true : router.navigate(['/login']);
};

/*
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = false;  // Aqui você coloca a lógica real, por exemplo, checar token

    if (!isLoggedIn) {
      this.router.navigate(['/login']);  // Redireciona para login se não estiver logado
      return false;
    }

    return true;  // Permite acessar a rota
  }
}
*/
