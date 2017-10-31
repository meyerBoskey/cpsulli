import { Component, OnInit } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";
// import { DatePickerOptions, DateModel } from 'ng2-datepicker';

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
    constructor(private employeeService: EmployeeService) {}

    onSubmit(form: NgForm) {
        if (form.value.employee) {
            const task = new Task(form.value.content, form.value.dueDate, null, form.value.employee.employeeId);
            this.employeeService.addTask(task)
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );

        } else {
            const task = new Task(form.value.content, form.value.dueDate);
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
    // assignTask() {
    //     this.form = new FormGroup({
    //         content: new FormControl(null, Validators.required),
    //         dueDate: new FormControl(null),
    //         employeeId: new FormControl(this.employeeId),
    //     });
    // }
    ngOnInit() {
        this.form = new FormGroup({
            content: new FormControl(null, Validators.required),
            dueDate: new FormControl(null),
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
