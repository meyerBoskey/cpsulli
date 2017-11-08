var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee.model";
var AddEmployeeComponent = /** @class */ (function () {
    function AddEmployeeComponent(employeeService) {
        this.employeeService = employeeService;
    }
    AddEmployeeComponent.prototype.onSubmit = function (form) {
        if (this.employee) {
            // Edit
            this.employee.firstName = form.value.firstName;
            this.employee.lastName = form.value.lastName;
            this.employee.email = form.value.email;
            this.employee.password = form.value.password;
            this.employee.jobTitle = form.value.jobTitle;
            if (this.form.value.adminCode == localStorage.getItem('adminCode')) {
                this.employee.isAdmin = true;
            }
            else {
                this.employee.isAdmin = false;
            }
            this.employeeService.updateEmployee(this.employee)
                .subscribe(function (result) { return console.log(result); });
            this.employee = null;
        }
        else if (this.form.value.adminCode == localStorage.getItem('adminCode')) {
            var employee = new Employee(this.form.value.email, this.form.value.password, this.form.value.firstName, this.form.value.lastName, this.form.value.jobTitle, true);
            this.employeeService.addEmployee(employee)
                .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        }
        else {
            var employee = new Employee(this.form.value.email, this.form.value.password, this.form.value.firstName, this.form.value.lastName, this.form.value.jobTitle, false);
            this.employeeService.addEmployee(employee)
                .subscribe(function (data) { return console.log(data); });
        }
        this.form.reset();
    };
    AddEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        this.employeeService.employeeIsEdit.subscribe(function (employee) { return _this.employee = employee; });
    };
    AddEmployeeComponent = __decorate([
        Component({
            selector: 'app-add-employees',
            templateUrl: './addEmployee.component.html',
            styles: ["\n        .text {\n            color: #ffffff;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [EmployeeService])
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
}());
export { AddEmployeeComponent };