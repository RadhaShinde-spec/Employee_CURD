import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  isVisible: boolean = false;
  constructor(private service: EmployeeService) {}

  // users: {
  //   name: string;
  //   email: string;
  //   password: string;
  // }[] = [];
  users:any;
  getAll() {
    if (!this.isVisible) {
      this.service.getAll().subscribe((res) => {
        console.log('before');

        this.users = res;
        console.log(res);
        console.log('after');
        this.isVisible = true;
      });
    }else{
      this.isVisible = false;
    }
  }
}
