import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.com$'),
    ]),
    password: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z0-9!@#$%^&*()_+=\\-{}\\[\\]:;"\'<>,.?/`~|]+@[a-zA-Z0-9!@#$%^&*()_+=\\-{}\\[\\]:;"\'<>,.?/`~|]+$')
]),
  });

  onLogin() {
    alert('hello');
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      console.log('Login successful!', this.loginForm.value);

      this.router.navigate(['/dashboard']);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
