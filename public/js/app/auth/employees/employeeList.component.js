var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from "./employee.service";
import { Employee } from "./employee.model";
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(employeeService, router) {
        this.employeeService = employeeService;
        this.router = router;
        this.modalIsOpen = false;
        this.display = 'none';
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
    EmployeeListComponent.prototype.trackByEmployeeId = function (employee) {
        return employee.employeeId;
    };
    EmployeeListComponent.prototype.onEdit = function () {
        this.employeeService.editEmployee(this.employee);
    };
    EmployeeListComponent.prototype.onDelete = function () {
        this.display = 'none';
        this.employeeService.deleteEmployee(this.firedEmployee)
            .subscribe(function (result) { return console.log(result); });
    };
    EmployeeListComponent.prototype.onCancel = function () {
        this.firedEmployee = null;
        this.display = 'none';
    };
    EmployeeListComponent.prototype.modalOpen = function (employee) {
        this.display = 'block';
        this.firedEmployee = employee;
        // this.modalIsOpen = true;
        // console.log(this.modalIsOpen)
    };
    __decorate([
        Input(),
        __metadata("design:type", Employee)
    ], EmployeeListComponent.prototype, "employee", void 0);
    EmployeeListComponent = __decorate([
        Component({
            selector: 'app-employee-list',
            templateUrl: './employeeList.component.html'
        }),
        __metadata("design:paramtypes", [EmployeeService, Router])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
export { EmployeeListComponent };
