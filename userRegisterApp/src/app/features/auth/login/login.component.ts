import { Router, RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SnackbarService } from '../../../core/services/snackbar.service';
import { ContainerComponent } from '../../../shared/container/container.component';
import { SubmitButtonComponent } from '../../../shared/submit-button/submit-button.component';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    NgIf,
    NgClass,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ContainerComponent,
    SubmitButtonComponent,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loading: boolean = false;
  isPasswordVisible: boolean = false;
  user = {
    username: '',
    password: '',
  };
  constructor(
    private snackbarService: SnackbarService,
    private router: Router,
    private auth: AuthService
  ) {}

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onLogin(form: any) {
    if (form.invalid) {
      console.log('Formulário inválido!');
      Object.values(form.controls).forEach((control: any) => {
        control.markAsTouched();
      });
      this.snackbarService.showMessage('warning');
      this.loading = false;
      return;
    }

    this.auth.logInAccount(form.value).subscribe({
      next: (response) => {
        // Ao receber a resposta com sucesso, navega para a página de home
        this.auth.setLocalAcess(response.token);
        this.snackbarService.showMessage('success');
        this.router.navigate(['/home']);  

        // Resetar o formulário após sucesso
        form.reset();
        this.loading = false; // Desativa o loading
      },
      error: (e) => {
        // Exibe a mensagem de erro e desativa o loading
        this.snackbarService.showMessage(e.error.error);
        this.loading = false;
      },
    });
  }
}
