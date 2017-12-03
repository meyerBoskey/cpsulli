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
import { EmployeeService } from './employee.service';
var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(employeeService) {
        this.employeeService = employeeService;
        this.tasks = [];
        this.employees = [];
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeService.getEmployees()
            .subscribe(function (employees) {
            _this.employees = employees;
        });
        this.employeeService.getTasks()
            .subscribe(function (tasks) {
            _this.tasks = tasks;
            _this.tasksLength = tasks.length;
        });
        // this.employeeService.currentTaskLength.subscribe(length =>{
        //     console.log(length);
        // });
        // this.employeeService.taskWasAdded.subscribe((task: Task) => {
        //     console.log('task was added');
        //     this.tasksLength++;
        // });
    };
    EmployeesComponent = __decorate([
        Component({
            selector: 'app-employees',
            templateUrl: './employees.component.html'
        }),
        __metadata("design:paramtypes", [EmployeeService])
    ], EmployeesComponent);
    return EmployeesComponent;
}());
export { EmployeesComponent };
