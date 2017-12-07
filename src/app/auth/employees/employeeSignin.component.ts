import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import { EmployeeService } from "./employee.service";
import {Employee} from "./employee.model";

@Component({
    selector: 'app-employees-signin',
    template: `
    <div class="col-md-8 col-md-offset-2">
        <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" id="email" class="form-control" formControlName="email" placeholder="Email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" class="form-control" formControlName="password" placeholder="Password">
                <button class="btn btn-primary" type="submit" [disabled]="!myForm.valid">Submit</button>
            </div>
        </form>
    </div>
    `
})
export class EmployeeSigninComponent {
    myForm: FormGroup;
    constructor(private employeeService: EmployeeService, private router: Router) {}

    onSubmit() {
        const employee = new Employee(
            this.myForm.value.email,
            this.myForm.value.password
        );
        this.employeeService.signinEmployee(employee)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('employeeID', data.employeeId);
                    localStorage.setItem('isAdmin', data.isAdmin);
                    localStorage.setItem('firstName', data.firstName);
                    this.router.navigateByUrl('employees/tasks');
                },
                error => console.error(error)
            )
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            password: new FormControl('', Validators.required)
        });
    }

}
