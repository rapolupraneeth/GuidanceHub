import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentGuideService } from '../student-guide.service';

interface SignupForm {
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: StudentGuideService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        this.passwordValidator()
      ]]
    });
  }

  get f() {
    return this.signupForm.controls as { [key in keyof SignupForm]: any };
  }

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) {
        return null;
      }

      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumeric = /[0-9]/.test(value);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

      const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialChar;

      if (!passwordValid) {
        return { passwordStrength: true };
      }
      return null;
    };
  }

  submitForm() {
    if (this.signupForm.invalid) {
      return;
    }

    this.service.postData(this.signupForm.value).subscribe(
      response => {
        alert("Sign Up completed Successfully");
        this.router.navigate(['/signin']);
      },
      error => {
        alert("Sign Up failed");
      }
    );
  }
}