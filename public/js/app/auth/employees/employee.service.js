var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Http, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Employee } from './employee.model';
import { Task } from '../tasks/task.model';
import { ErrorService } from '../../errors/error.service';
var EmployeeService = /** @class */ (function () {
    function EmployeeService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.employees = [];
        this.tasks = [];
        this.employeeIsEdit = new EventEmitter();
    }
    EmployeeService.prototype.createCompany = function (company) {
        var _this = this;
        var body = JSON.stringify(company);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('https://cpsulli.herokuapp.com/company', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    EmployeeService.prototype.signinCompany = function (company) {
        var _this = this;
        var body = JSON.stringify(company);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('https://cpsulli.herokuapp.com/company/signin', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    EmployeeService.prototype.signinEmployee = function (employee) {
        var _this = this;
        var body = JSON.stringify(employee);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('https://cpsulli.herokuapp.com/employees/signin', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    EmployeeService.prototype.addEmployee = function (employee) {
        var _this = this;
        var body = JSON.stringify(employee);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('https://cpsulli.herokuapp.com/employees' + token, body, { headers: headers })
            .map(function (response) {
            var result = response.json().obj;
            var employee = new Employee(result.email, result.password, result.firstName, result.lastName, result.jobTitle, result.isAdmin, result._id, result.tasks);
            _this.employees.push(employee);
            return employee;
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    EmployeeService.prototype.getEmployees = function () {
        var _this = this;
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.get('https://cpsulli.herokuapp.com/company' + token, { headers: headers })
            .map(function (response) {
            var employees = response.json().obj;
            var transformedEmployees = [];
            for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
                var employee = employees_1[_i];
                transformedEmployees.push(new Employee(employee.email, employee.password, employee.firstName, employee.lastName, employee.jobTitle, employee.isAdmin, employee._id, employee.tasks));
            }
            _this.employees = transformedEmployees;
            return transformedEmployees;
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    EmployeeService.prototype.editEmployee = function (employee) {
        this.employeeIsEdit.emit(employee);
    };
    EmployeeService.prototype.deleteEmployee = function (employee) {
        var _this = this;
        this.employees.splice(this.employees.indexOf(employee), 1);
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete('https://cpsulli.herokuapp.com/employees/' + employee.employeeId + token)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    EmployeeService.prototype.updateEmployee = function (employee) {
        var _this = this;
        var body = JSON.stringify(employee);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch('https://cpsulli.herokuapp.com/employees/' + employee.employeeId + token, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    EmployeeService.prototype.addTask = function (task) {
        var _this = this;
        var body = JSON.stringify(task);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('https://cpsulli.herokuapp.com/task' + token, body, { headers: headers })
            .map(function (response) {
            var result = response.json();
            var task = new Task(result.obj.content, result.obj.dueDate, result.obj._id, result.obj.employee, result.obj.employeeFirstName, result.obj.employeeLastName, result.obj.company, true);
            _this.tasks.push(task);
            return task;
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    EmployeeService.prototype.getTasks = function () {
        var _this = this;
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.get('https://cpsulli.herokuapp.com/task' + token, { headers: headers })
            .map(function (response) {
            var tasks = response.json().obj;
            var transformedTasks = [];
            for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
                var task = tasks_1[_i];
                transformedTasks.push(new Task(task.content, task.dueDate, task._id, task.employee, task.employeeFirstName, task.employeeLastName, task.company));
            }
            _this.tasks = transformedTasks;
            return transformedTasks;
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    EmployeeService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http, ErrorService])
    ], EmployeeService);
    return EmployeeService;
}());
export { EmployeeService };
