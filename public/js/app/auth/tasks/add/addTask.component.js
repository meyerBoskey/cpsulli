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
// import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { EmployeeService } from "../../employees/employee.service";
import { Task } from "../task.model";
var AddTasksComponent = /** @class */ (function () {
    function AddTasksComponent(employeeService) {
        this.employeeService = employeeService;
    }
    AddTasksComponent.prototype.onSubmit = function (form) {
        if (form.value.employee) {
            var task = new Task(form.value.content, form.value.dueDate, null, form.value.employee.employeeId);
            this.employeeService.addTask(task)
                .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
        }
        else {
            var task = new Task(form.value.content, form.value.dueDate);
            this.employeeService.addTask(task)
                .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
        }
    };
    AddTasksComponent.prototype.isCompany = function () {
        if (localStorage.getItem('company')) {
            return true;
        }
        return false;
    };
    // assignTask() {
    //     this.form = new FormGroup({
    //         content: new FormControl(null, Validators.required),
    //         dueDate: new FormControl(null),
    //         employeeId: new FormControl(this.employeeId),
    //     });
    // }
    AddTasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new FormGroup({
            content: new FormControl(null, Validators.required),
            dueDate: new FormControl(null),
            employee: new FormControl(null),
        });
        this.employeeService.getEmployees()
            .subscribe(function (employees) {
            _this.employees = employees;
        });
    };
    AddTasksComponent = __decorate([
        Component({
            selector: 'app-add-tasks',
            templateUrl: './addTask.component.html'
        }),
        __metadata("design:paramtypes", [EmployeeService])
    ], AddTasksComponent);
    return AddTasksComponent;
}());
export { AddTasksComponent };
