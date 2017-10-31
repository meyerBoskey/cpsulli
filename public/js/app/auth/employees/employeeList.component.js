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
import { EmployeeService } from "./employee.service";
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(employeeService) {
        this.employeeService = employeeService;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('isAdmin') == 'true') {
            this.employeeService.getEmployees()
                .subscribe(function (employees) {
                _this.employees = employees;
            });
        }
    };
    EmployeeListComponent = __decorate([
        Component({
            selector: 'app-employee-list',
            template: "\n    <div>\n        <app-employee\n               [employee]=\"employee\"\n                *ngFor=\"let employee of employees\"></app-employee>\n    </div>\n"
        }),
        __metadata("design:paramtypes", [EmployeeService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
export { EmployeeListComponent };
