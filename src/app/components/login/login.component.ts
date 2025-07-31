import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private service: EmployeeService) {}

  userLogin = {
    username: '',
    password: '',
  };
  onLogin() {
    this.service.login(this.userLogin).subscribe((res) => {
      console.log(res);
      if (res) {
        this.router.navigateByUrl('/dashboard');
      } else {
        alert('Wrong username or password');
      }
    });
  }
}
