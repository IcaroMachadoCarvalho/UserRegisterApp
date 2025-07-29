import { RouterModule } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SnackbarService } from '../../../core/snackbar.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SubmitButtonComponent } from '../../../shared/submit-button/submit-button.component';

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
  constructor(private snackbarService: SnackbarService) {}

  loading: boolean = false;

  forgotUser = {
    email: '',
    newPassword: '',
    confirmPassword: '',
  };

  isPasswordVisible: boolean = false;
  isConfirmPasswordVisible: boolean = false;

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  toggleConfirmPasswordVisibility() {
    this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible;
  }

  onForgotPassword(form: any) {
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
      this.snackbarService.showMessage('success');
      console.log('Login successful');
      console.log(form.value);
      form.reset();
    }, 2000);
  }
}
