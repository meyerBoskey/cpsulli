import { Component, OnInit } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

import * as moment from 'moment';
import { EmployeeService } from "../../employees/employee.service";
import { Employee } from "../../employees/employee.model";
import { Task } from "../task.model";

@Component({
    selector: 'app-add-tasks',
    templateUrl: './addTask.component.html'
})
export class AddTasksComponent implements OnInit {
    task: Task;
    employees: Employee[];
    form: FormGroup;
    date: FormGroup;
    constructor(private employeeService: EmployeeService, private fb: FormBuilder) {}

    onSubmit(form: NgForm) {
        var dueDate = form.value.date.format('L');
        if (form.value.employee) {
            const task = new Task(form.value.content, dueDate, null, form.value.employee.employeeId);
            this.employeeService.addTask(task)
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );

        } else {
            const task = new Task(form.value.content, dueDate);
            this.employeeService.addTask(task)
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );

        }
    }
    isCompany() {
        if (localStorage.getItem('company')) {
            return true
        }
        return false
    }
    ngOnInit() {
        this.date = this.fb.group({
            date: ''
        });
        this.form = new FormGroup({
            content: new FormControl(null, Validators.required),
            date: new FormControl(null),
            employee: new FormControl(null),
        });
        this.employeeService.getEmployees()
            .subscribe(
                (employees: Employee[]) => {
                    this.employees = employees;
                }
            );

    }

}