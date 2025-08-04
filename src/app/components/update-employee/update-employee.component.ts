import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  constructor(private activatedRounte: ActivatedRoute, private service: EmployeeService, private router: Router) {

  }

  // we have to decalre formgroup first inorder to update in ngOnInit()
  registerData!: FormGroup;

  ngOnInit(): void {

    const id = this.activatedRounte.snapshot.paramMap.get('id');
    alert(id);

    this.registerData = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])

    })

    this.service.getRecordById(id).subscribe(res => {
      this.registerData.patchValue({
        id: res.id,
        name: res.name,
        email: res.email,
        password: res.password
      })
    })
  }

  update() {
console.log(this.registerData.value);


    this.service.update(this.registerData.value).subscribe(res => {
      console.log(this.registerData.value);
      if (res) {
        this.router.navigateByUrl('/dashboard');
      }
      else {
        console.log("not updated!");
      }


    })
  }

}
