import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SnackbarService } from '../../../core/services/snackbar.service';
import { SubmitButtonComponent } from '../../../shared/submit-button/submit-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgClass,
    MatIconModule,
    SubmitButtonComponent,
    RouterLink,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  constructor(private snackbarService: SnackbarService) {}
  loading: boolean = false;
  isPasswordVisible: boolean = false;
  isPasswordConfirmVisible: boolean = false;
  newUser = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  toggleConfirmPasswordVisibility() {
    this.isPasswordConfirmVisible = !this.isPasswordConfirmVisible;
  }

  onSignUp(form: any) {
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
      console.log(form.value);
      form.reset();
    }, 2000);
  }
}
