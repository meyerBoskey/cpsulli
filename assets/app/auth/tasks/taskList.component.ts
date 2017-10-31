import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../employees/employee.service";
import { Employee } from "../employees/employee.model";
import { Company } from "../company/company.model";
import { Task } from "./task.model";


@Component({
    selector: 'app-task-list',
    template: `
    <div>
        <app-task
               [task]="task"
                *ngFor="let task of tasks"></app-task>
    </div>
`
})
export class TaskListComponent implements OnInit {
    tasks: Task[];

    constructor(private employeeService: EmployeeService) {}

    ngOnInit() {
        this.employeeService.getTasks()
            .subscribe(
                (tasks: Task[]) => {
                    this.tasks = tasks;
                }
            );
    }
}
