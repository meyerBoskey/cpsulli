import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { EmployeeService } from "../employees/employee.service";
import { Employee } from "../employees/employee.model";
import { Company } from "../company/company.model";
import { Task } from "./task.model";

@Component({
    selector: 'app-task-list',
    templateUrl: './taskList.component.html'
})
export class TaskListComponent implements OnInit {
    tasks: Task[];
    deletedTask: Task;
    display = 'none';
    companyName: string;
    searchText;
    constructor(private employeeService: EmployeeService, private router: Router) {}

    ngOnInit() {
        this.employeeService.getTasks()
            .subscribe(
                (tasks: Task[]) => {
                    this.tasks = tasks;
                }
            );
    }

    onDelete(){
        this.display = 'none';
        this.employeeService.deleteTask(this.deletedTask)
            .subscribe(
                result => console.log(result)
            );
    }

    onCancel(){
        this.deletedTask = null;
        this.display = 'none';
    }

    modalOpen(task: Task){
        this.display = 'block';
        this.deletedTask = task;
    }

    isCompany() {
        if (localStorage.getItem('company')) {
            this.companyName = localStorage.getItem('company');
            return true
        }
        return false
    }

}
