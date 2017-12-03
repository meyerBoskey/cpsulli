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
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { EmployeeService } from "../../employees/employee.service";
import { Company } from "../company.model";
var CreateCompanyComponent = /** @class */ (function () {
    function CreateCompanyComponent(employeeService) {
        this.employeeService = employeeService;
    }
    CreateCompanyComponent.prototype.onSubmit = function () {
        var company = new Company(this.myForm.value.companyName, this.myForm.value.password, this.myForm.value.adminCode);
        this.employeeService.createCompany(company)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        console.log(company);
        this.myForm.reset();
    };
    CreateCompanyComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            companyName: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required),
            adminCode: new FormControl(null, Validators.required)
        });
    };
    CreateCompanyComponent = __decorate([
        Component({
            selector: 'app-create-company',
            templateUrl: './createCompany.component.html'
        }),
        __metadata("design:paramtypes", [EmployeeService])
    ], CreateCompanyComponent);
    return CreateCompanyComponent;
}());
export { CreateCompanyComponent };
