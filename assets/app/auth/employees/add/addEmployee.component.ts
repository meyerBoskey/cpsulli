import { Component, OnInit } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";

import { EmployeeService } from "../employee.service";
import { Employee } from "../employee.model";

@Component({
    selector: 'app-add-employees',
    templateUrl: './addEmployee.component.html',
    styles: [`
        .text {
            color: #ffffff;
        }
    `]
})
export class AddEmployeeComponent implements OnInit {
    employee: Employee;
    form: FormGroup;

    constructor(private employeeService: EmployeeService) {}

    onSubmit(form: NgForm) {
        if (this.employee) {
            // Edit
            this.employee.firstName = form.value.firstName;
            this.employee.lastName = form.value.lastName;
            this.employee.email = form.value.email;
            this.employee.password = form.value.password;
            this.employee.jobTitle = form.value.jobTitle;
            if (this.form.value.adminCode == localStorage.getItem('adminCode')) {
                this.employee.isAdmin = true;
            } else {
                this.employee.isAdmin = false;
            }
            this.employeeService.updateEmployee(this.employee)
                .subscribe(
                    result => console.log(result)
                );
            this.employee = null;
        } else if (this.form.value.adminCode == localStorage.getItem('adminCode')) {
            const employee = new Employee(
                this.form.value.email,
                this.form.value.password,
                this.form.value.firstName,
                this.form.value.lastName,
                this.form.value.jobTitle,
                true
            );
            this.employeeService.addEmployee(employee)
                .subscribe(
                    data => console.log(data),
                    error => console.log(error)
                );
        } else {
            const employee = new Employee(
                this.form.value.email,
                this.form.value.password,
                this.form.value.firstName,
                this.form.value.lastName,
                this.form.value.jobTitle,
                false
            );
            this.employeeService.addEmployee(employee)
                .subscribe(
                    data => console.log(data),
                    // error => console.log(error)
                );
        }
        this.form.reset();
    }

    ngOnInit() {
        this.form = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            jobTitle: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.email
            ]),
            password: new FormControl(null, Validators.required),
            adminCode: new FormControl(null)
        });
        this.employeeService.employeeIsEdit.subscribe(
            (employee: Employee) => this.employee = employee
        );
    }

}
