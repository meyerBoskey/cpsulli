import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AddTasksComponent } from '../../tasks/add/addTask.component';
import { Employee } from '../employee.model';
import { EmployeeService } from "../employee.service";

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styles: [`
    .author {
        display: inline-block;
        font-style: italic;
        font-size: 12px;
        width: 100%;
    }
    .config {
        display: inline-block;
        text-align: right;
        font-size: 12px;
        width: 30%;
    }
`]
})
export class EmployeeComponent {
    @Input() employee: Employee;

    constructor(private employeeService: EmployeeService, public router: Router,
        // private addTasksComponent: AddTasksComponent
    ) {}

    onEdit() {
        this.employeeService.editEmployee(this.employee);
    }
    // onAssignTask() {
    //     this.addTasksComponent.assignTask();
    // }
    onDelete() {
        this.employeeService.deleteEmployee(this.employee)
            .subscribe(
                result => console.log(result)
            );
    }

}
