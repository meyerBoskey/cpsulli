import { Component, OnInit, ElementRef, Renderer } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

import { EmployeeService } from "../../employees/employee.service";
import { Employee } from "../../employees/employee.model";
import { Task } from "../task.model";

declare var jQuery: any;

@Component({
    selector: 'app-add-tasks',
    styleUrls: ['./addTask.component.scss'],
    templateUrl: './addTask.component.html'
})
export class AddTasksComponent implements OnInit {
    task: Task;
    employees: Employee[] = [];
    form: FormGroup;
    successMessage: string = '';
    startDate = new Date(1990, 0, 1);
    constructor(private employeeService: EmployeeService, public el: ElementRef, public renderer: Renderer) {}

    onSubmit(form: NgForm) {
        if (form.value.employee) {
            const task = new Task(form.value.content, form.value.dueDate, 'incomplete', null, form.value.employee.employeeId);
            this.employeeService.addTask(task)
                .subscribe(
                    data => {
                        this.successMessage = 'Task was added!';
                        setTimeout(() => {
                            this.successMessage = '';
                        }, 5000);
                    },
                    error => console.error(error)
                );
        } else {
            const task = new Task(form.value.content, form.value.dueDate, 'incomplete');
            this.employeeService.addTask(task)
                .subscribe(
                    data => {
                        this.successMessage = 'Task was added!';
                        setTimeout(() => {
                            this.successMessage = '';
                            console.log(this.successMessage);
                        }, 5000);
                    },
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
        this.form = new FormGroup({
            content: new FormControl(null, Validators.required),
            dueDate: new FormControl(null),
            // completed: new FormControl(false),
            employee: new FormControl(null),
        });
        this.employeeService.getEmployees()
            .subscribe(
                (employees: Employee[]) => {
                    this.employees = employees;
                }
            );
        jQuery('#datetimepicker').datetimepicker();

    }

}
