import { RouterModule } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SnackbarService } from '../../../core/services/snackbar.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SubmitButtonComponent } from '../../../shared/submit-button/submit-button.component';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  imports: [
    FormsModule,
    NgClass,
    NgIf,
    RouterModule,
    MatIconModule,
    SubmitButtonComponent,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  constructor(
    private snackbarService: SnackbarService,
    private auth: AuthService
  ) {}

  loading: boolean = false;
  isPasswordVisible: boolean = false;
  isConfirmPasswordVisible: boolean = false;
  isResetFormVisible: boolean = true;
  accessCodeValue: string = '';

  forgotUser = {
    email: '',
    accessCode: '',
    newPassword: '',
    confirmPassword: '',
  };

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  toggleConfirmPasswordVisibility() {
    this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible;
  }

  // Alterna estado de carregamento
  toggleLoading(state?: boolean) {
    this.loading = state !== undefined ? state : !this.loading;
  }
  // Alterna estado para motrar a outra parte do formulário de reset de senha
  toggleResetFormVisibility(state?: boolean) {
    this.isResetFormVisible =
      state !== undefined ? state : !this.isResetFormVisible;
  }

  onForgotPassword(form: any) {
    if (form.invalid) {
      console.log('Formulário inválido!');
      Object.values(form.controls).forEach((control: any) => {
        control.markAsTouched();
      });
      this.snackbarService.showMessage('warning');
      this.toggleLoading(false);
      return;
    }
    const { email, newPassword, confirmPassword, accessCode } = form.value;
    const isInitialRecoveryStep =
      email && !newPassword && !confirmPassword && !accessCode;
    if (isInitialRecoveryStep) {
      this.toggleLoading(true);
      this.auth.forgotAcess({ email }).subscribe({
        next: (response) => {
          this.accessCodeValue = response.accessCode;
          this.snackbarService.showMessage(
            'Digite o código de acesso que foi enviado para você'
          );
          this.toggleLoading(false);
          this.toggleResetFormVisibility(false);
          return;
        },
        error: (e) => {
          this.snackbarService.showMessage(e.error.error);
          this.toggleResetFormVisibility(true);
          this.toggleLoading(false);
          return;
        },
      });
    }

    if (newPassword !== confirmPassword) {
      this.snackbarService.showMessage('Passwords must be the same');
      this.toggleLoading(false);
      this.toggleResetFormVisibility(true);
      return;
    }
    const isLastRecoveryStep =
      email && newPassword && confirmPassword && accessCode;
    if (isLastRecoveryStep) {
      this.toggleLoading(true);
      this.auth
        .resetAcess({
          email,
          accessCode,
          newPassword,
          confirmPassword,
        })
        .subscribe({
          next: () => {
            this.snackbarService.showMessage('success');
            this.toggleLoading(false);
            this.toggleResetFormVisibility(true);
            console.log('Login successful');
            form.reset();
          },
          error: (e) => {
            this.snackbarService.showMessage(e.error.error);
            this.toggleLoading(false);
          },
        });
    }
  }
}
