import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import { EmployeeService } from "../../employees/employee.service";
import {Company} from "../company.model";

@Component({
    selector: 'app-signin-company',
    templateUrl: './signinCompany.component.html'
})
export class SigninCompanyComponent {
    myForm: FormGroup;
    constructor(private employeeService: EmployeeService, private router: Router) {}

    onSubmit() {
        const company = new Company(
            this.myForm.value.companyName,
            this.myForm.value.password,
            null
        );
        this.employeeService.signinCompany(company)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('company', data.company);
                    localStorage.setItem('isAdmin', 'true');
                    localStorage.setItem('adminCode', data.adminCode);
                    this.router.navigateByUrl('/homePage');
                },
                error => console.error(error)
            )
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            companyName: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

}
