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
import { Employee } from '../employee.model';
import { EmployeeService } from "../employee.service";
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(employeeService, router) {
        this.employeeService = employeeService;
        this.router = router;
    }
    EmployeeComponent.prototype.onEdit = function () {
        this.employeeService.editEmployee(this.employee);
    };
    // onAssignTask() {
    //     this.addTasksComponent.assignTask();
    // }
    EmployeeComponent.prototype.onDelete = function () {
        this.employeeService.deleteEmployee(this.employee)
            .subscribe(function (result) { return console.log(result); });
    };
    __decorate([
        Input(),
        __metadata("design:type", Employee)
    ], EmployeeComponent.prototype, "employee", void 0);
    EmployeeComponent = __decorate([
        Component({
            selector: 'app-employee',
            templateUrl: './employee.component.html',
            styles: ["\n    .author {\n        display: inline-block;\n        font-style: italic;\n        font-size: 12px;\n        width: 100%;\n    }\n    .config {\n        display: inline-block;\n        text-align: right;\n        font-size: 12px;\n        width: 30%;\n    }\n"]
        }),
        __metadata("design:paramtypes", [EmployeeService, Router])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
export { EmployeeComponent };
