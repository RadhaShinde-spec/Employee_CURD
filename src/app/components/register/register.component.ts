import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private router: Router, private registerservice: EmployeeService) {
    this.register();

  }
  registerData = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])

  })
  register() {

    if(this.registerData.valid){
      console.log("register start!");


    this.registerservice.register(this.registerData.value).subscribe(res=>{
      console.log(this.registerData.value);
       this.router.navigateByUrl('/dashboard');
       console.log("register end!");

    })
  }
  }
}
