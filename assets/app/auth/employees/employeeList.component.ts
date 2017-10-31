import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "./employee.service";
import { Employee } from "./employee.model";
import { Company } from "../company/company.model";
import { AddTasksComponent } from '../tasks/add/addTask.component';


@Component({
    selector: 'app-employee-list',
    template: `
    <div>
        <app-employee
               [employee]="employee"
                *ngFor="let employee of employees"></app-employee>
    </div>
`
})
export class EmployeeListComponent implements OnInit {
    employees: Employee[];

    constructor(private employeeService: EmployeeService,
    ) {}

    ngOnInit() {
        if (localStorage.getItem('isAdmin') == 'true') {
            this.employeeService.getEmployees()
                .subscribe(
                    (employees: Employee[]) => {
                        this.employees = employees;
                    }
                );
        }
    }
}
