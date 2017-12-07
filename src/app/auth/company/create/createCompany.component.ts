import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { EmployeeService } from "../../employees/employee.service";
import { Company } from "../company.model";


@Component({
    selector: 'app-create-company',
    templateUrl: './createCompany.component.html'
})
export class CreateCompanyComponent {
    myForm: FormGroup;

    constructor(private employeeService: EmployeeService) {}

    onSubmit() {
        const company = new Company(
            this.myForm.value.companyName,
            this.myForm.value.password,
            this.myForm.value.adminCode
        );
        this.employeeService.createCompany(company)
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            );
            console.log(company);
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            companyName: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required),
            adminCode: new FormControl(null, Validators.required)
        });
    }
}
