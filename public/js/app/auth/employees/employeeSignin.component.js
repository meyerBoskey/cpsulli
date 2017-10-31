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
import { EmployeeService } from "./employee.service";
import { Employee } from "./employee.model";
var EmployeeSigninComponent = /** @class */ (function () {
    function EmployeeSigninComponent(employeeService, router) {
        this.employeeService = employeeService;
        this.router = router;
    }
    EmployeeSigninComponent.prototype.onSubmit = function () {
        var _this = this;
        var employee = new Employee(this.myForm.value.email, this.myForm.value.password);
        this.employeeService.signinEmployee(employee)
            .subscribe(function (data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('employeeID', data.employeeId);
            localStorage.setItem('isAdmin', data.isAdmin);
            _this.router.navigateByUrl('/tasks');
        }, function (error) { return console.error(error); });
        this.myForm.reset();
    };
    EmployeeSigninComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            email: new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            password: new FormControl('', Validators.required)
        });
    };
    EmployeeSigninComponent = __decorate([
        Component({
            selector: 'app-employees-signin',
            template: "\n    <div class=\"col-md-8 col-md-offset-2\">\n        <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\">\n                <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!myForm.valid\">Submit</button>\n            </div>\n        </form>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [EmployeeService, Router])
    ], EmployeeSigninComponent);
    return EmployeeSigninComponent;
}());
export { EmployeeSigninComponent };
