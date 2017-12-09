import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { EmployeeService } from "../employees/employee.service";
import { Employee } from "../employees/employee.model";
import { Company } from "../company/company.model";
import { Task } from "./task.model";

@Component({
    selector: 'app-task-list',
    templateUrl: './taskList.component.html',
    styles: [`
        #filterInput {
            z-index: 5;
        }
    `]
})
export class TaskListComponent implements OnInit {
    @Input() tasks: Task[];
    deletedTask: Task;
    display = 'none';
    companyName: string;
    searchText;
    @Input() completeTasks: Task[] = [];
    @Input() incompleteTasks: Task[] = [];
    constructor(private employeeService: EmployeeService, private router: Router) {}

    ngOnInit() {
        this.employeeService.getTasks()
            .subscribe(
                (tasks: Task[]) => {
                    console.log(tasks)
                    this.tasks = tasks;
                    for (let i = 0; i < tasks.length; i++) {
                        if(tasks[i].completed == 'incomplete'){
                            this.incompleteTasks.push(tasks[i])
                        } else {
                            this.completeTasks.push(tasks[i])
                        }
                    }
                }
            );
    }
    onComplete(task: Task) {
        task.completed = 'complete';
        this.employeeService.updateTask(task)
            .subscribe(result => console.log(result));
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

    onEdit(task: Task) {
        this.employeeService.editTask(task);
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
