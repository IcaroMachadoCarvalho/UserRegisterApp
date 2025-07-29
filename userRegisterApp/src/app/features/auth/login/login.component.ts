import { Router, RouterLink, RouterModule } from '@angular/router';
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
    private auth:AuthService
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

    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      console.log(form.value);
      form.reset();
      this.snackbarService.showMessage('success');
      this.auth.logInAccount()
      this.router.navigate(['/home']);
    }, 2000); // Simulate a 2-second delay for the login process
  }
}
