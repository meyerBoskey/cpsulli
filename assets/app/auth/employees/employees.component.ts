import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Task } from '../tasks.task.model';
import { Employee } from './employee.model';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html'
})
export class EmployeesComponent implements OnInit{
    tasks: Task[] = [];
    employees: Employee[] = [];
    tasksLength;
    constructor(private employeeService: EmployeeService){}

    ngOnInit() {
        this.employeeService.getEmployees()
            .subscribe(
                (employees: Employee[]) => {
                    this.employees = employees;
                }
            );
        this.employeeService.getTasks()
            .subscribe(
                (tasks: Task[]) => {
                    this.tasks = tasks;
                    this.tasksLength = tasks.length;
                }
            );
        this.employeeService.currentTaskLength.subscribe(length =>{
            console.log(length);
        });

            // this.employeeService.taskWasAdded.subscribe((task: Task) => {
            //     console.log('task was added');
            //     this.tasksLength++;
            // });

    }

}
