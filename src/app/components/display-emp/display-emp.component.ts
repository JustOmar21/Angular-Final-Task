import { EmployeeService } from './../../service/employee.service';
import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/IEmployee';

@Component({
  selector: 'app-display-emp',
  templateUrl: './display-emp.component.html',
  styleUrls: ['./display-emp.component.css']
})
export class DisplayEmpComponent implements OnInit {
employees : IEmployee[] | undefined;

constructor(private employeeService:EmployeeService){}


  ngOnInit(): void {
    this.getData()
  }

  Deletus(id:number)
  {
    this.employeeService.delete(id).subscribe(()=>{
      this.getData();
    });

  }

  getData(){
    this.employees;
    this.employeeService.getAll().subscribe((data)=>{
      this.employees = data
    })
  }


}
