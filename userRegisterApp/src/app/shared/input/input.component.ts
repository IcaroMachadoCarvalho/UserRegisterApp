import { Component, Input, ViewChild } from '@angular/core';
import { NgModel, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgIf, NgClass, FormsModule, MatIconModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() modelInput!: string;
  @Input() typeInput: 'text' | 'password' = 'text';
  @Input() placeholder: string = '';
  @Input() nameInput: string = '';

  @ViewChild(NgModel) ngModel!: NgModel;

  isPasswordVisible = false;

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  get isInvalid(): boolean {
    return !!(
      this.ngModel &&
      this.ngModel.invalid &&
      (this.ngModel.dirty || this.ngModel.touched)
    );
  }

  get hasRequiredError(): boolean {
    return !!this.ngModel?.errors?.['required'];
  }
}
