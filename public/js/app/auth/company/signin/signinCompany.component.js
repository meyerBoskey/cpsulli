var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from "../../employees/employee.service";
import { Company } from "../company.model";
var SigninCompanyComponent = /** @class */ (function () {
    function SigninCompanyComponent(employeeService, router) {
        this.employeeService = employeeService;
        this.router = router;
    }
    SigninCompanyComponent.prototype.onSubmit = function () {
        var _this = this;
        var company = new Company(this.myForm.value.companyName, this.myForm.value.password, null);
        this.employeeService.signinCompany(company)
            .subscribe(function (data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('company', data.company);
            localStorage.setItem('isAdmin', 'true');
            localStorage.setItem('adminCode', data.adminCode);
            _this.router.navigateByUrl('/employees');
            // this.router.navigate(['/employees']);
        }, function (error) { return console.error(error); });
        this.myForm.reset();
    };
    SigninCompanyComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            companyName: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    };
    SigninCompanyComponent = __decorate([
        Component({
            selector: 'app-signin-company',
            templateUrl: './signinCompany.component.html'
        }),
        __metadata("design:paramtypes", [EmployeeService, Router])
    ], SigninCompanyComponent);
    return SigninCompanyComponent;
}());
export { SigninCompanyComponent };
