import { Component, Input } from '@angular/core';

import { Task } from '../task.model';
// import { Employee } from '../../employees/employee.model';
import { EmployeeService } from "../../employees/employee.service";

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]

})
export class TaskComponent {
    @Input() task: Task;

    constructor(private employeeService: EmployeeService) {}

    onEdit() {
        this.employeeService.editTask(this.task);
    }


}
