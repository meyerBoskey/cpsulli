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
    modalIsOpen: boolean = false;
    employees: Employee[];
    @Input() employee: Employee;
    firedEmployee: Employee;
    display = 'none';
    searchText;

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

    trackByEmployeeId(employee: Employee){
        return employee.employeeId;
    }

    onEdit(employee: Employee) {
        this.employeeService.editEmployee(employee);
    }

    onDelete() {
        this.display = 'none';
        this.employeeService.deleteEmployee(this.firedEmployee)
            .subscribe(
                result => console.log(result)
            );
    }

    onCancel(){
        this.firedEmployee = null;
        this.display = 'none';
    }

    modalOpen(employee: Employee){
        this.display = 'block';
        this.firedEmployee = employee;
        // this.modalIsOpen = true;
        // console.log(this.modalIsOpen)
    }
}
