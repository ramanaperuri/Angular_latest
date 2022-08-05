import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    
    this.employeeService.getEmployeesList().subscribe(data => {
        this.employees = data;
    });
    
    /*
    this.employees = [
      {}
        "id": 1,
        "firstName": "Ramesh",
        "lastName": "Powar",
        "emailId": "ramesh@gmail.com"
      },
      {
        "id": 2,
        "firstName": "John",
        "lastName": "Cena",
        "emailId": "john_cena@gmail.com"
      }
    ];*/
  }

}
