import { Component,OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isVisible: boolean = false;
  constructor(private service: EmployeeService) { }

  // users: {
  //   name: string;
  //   email: string;
  //   password: string;
  // }[] = [];
  ngOnInit():void {
    this.getAll()

  }
  users: any;

  // getAll() {
  //   this.service.getAll().subscribe(res => {
  //     console.log(res);
  //     this.users = res;

  //   })
  // }
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
  deleteRecord(id:any){
    alert(id);
    this.service.deleteRecord(id).subscribe(res=>{
      if(res){
      console.log("got deleted");

      }else{
        console.log("something went wrong");

      }
    })
  }
}
