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
import { Router } from '@angular/router';
import { EmployeeService } from "../employees/employee.service";
var TaskListComponent = /** @class */ (function () {
    function TaskListComponent(employeeService, router) {
        this.employeeService = employeeService;
        this.router = router;
        this.display = 'none';
    }
    TaskListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeService.getTasks()
            .subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    };
    TaskListComponent.prototype.onDelete = function () {
        this.display = 'none';
        this.employeeService.deleteTask(this.deletedTask)
            .subscribe(function (result) { return console.log(result); });
    };
    TaskListComponent.prototype.onCancel = function () {
        this.deletedTask = null;
        this.display = 'none';
    };
    TaskListComponent.prototype.modalOpen = function (task) {
        this.display = 'block';
        this.deletedTask = task;
    };
    TaskListComponent.prototype.isCompany = function () {
        if (localStorage.getItem('company')) {
            this.companyName = localStorage.getItem('company');
            return true;
        }
        return false;
    };
    TaskListComponent = __decorate([
        Component({
            selector: 'app-task-list',
            templateUrl: './taskList.component.html'
        }),
        __metadata("design:paramtypes", [EmployeeService, Router])
    ], TaskListComponent);
    return TaskListComponent;
}());
export { TaskListComponent };
