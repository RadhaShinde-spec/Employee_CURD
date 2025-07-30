import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private router: Router) {

  }
  registerData = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.com$')]),
    password: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z0-9!@#$%^&*()_+=\\-{}\\[\\]:;"\'<>,.?/`~|]+@[a-zA-Z0-9!@#$%^&*()_+=\\-{}\\[\\]:;"\'<>,.?/`~|]+$')
])

  })
  register() {

    if (this.registerData.valid) {
      console.log("register done!");
      console.log(this.registerData.value)
      this.router.navigate(['/welcome']);
    }
  }
}
