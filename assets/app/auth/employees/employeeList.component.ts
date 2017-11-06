import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from "./employee.service";
import { Employee } from "./employee.model";
import { Company } from "../company/company.model";
import { AddTasksComponent } from '../tasks/add/addTask.component';


@Component({
    selector: 'app-employee-list',
    templateUrl: './employeeList.component.html'
})
export class EmployeeListComponent implements OnInit {
    employees: Employee[];
    @Input() employee: Employee;


    constructor(private employeeService: EmployeeService, private router: Router) {}

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

    onEdit() {
        this.employeeService.editEmployee(this.employee);
    }

    onDelete() {
        this.employeeService.deleteEmployee(this.employee)
            .subscribe(
                result => console.log(result)
            );
    }

}
