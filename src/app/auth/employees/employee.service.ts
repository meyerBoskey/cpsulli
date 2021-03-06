import {Http, Response, Headers} from '@angular/http';
import {Injectable, EventEmitter, Output} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

import {Employee} from './employee.model';
import {Task} from '../tasks/task.model';
import {Company} from '../company/company.model';
import {ErrorService} from '../../errors/error.service';
import { Error2Service } from "./error2/error2.service";
import { Error2Component } from "./error2/error2.component";

@Injectable()
export class EmployeeService {
    private employees: Employee[] = [];
    private tasks: Task[] = [];
    redirectUrl: string;
    employeeIsEdit = new EventEmitter<Employee>();
    taskCompletionEM = new EventEmitter<Task>();
    taskIsEdit = new EventEmitter<Task>();
    constructor(private http: Http, private errorService: ErrorService, private router: Router, private error2Service: Error2Service) {}

    logout() {
        this.router.navigateByUrl('/auth/signin');
        localStorage.clear();
    }
    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }


    createCompany(company: Company) {
        const body = JSON.stringify(company);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('https://cpsulli.herokuapp.com/company', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }
    signinCompany(company: Company) {
        const body = JSON.stringify(company);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/company/signin', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }
    signinEmployee(employee: Employee) {
        const body = JSON.stringify(employee);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/employees/signin', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }
    addEmployee(employee: Employee) {
        const body = JSON.stringify(employee);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('http://localhost:3000/employees' + token, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json().obj;
                const employee = new Employee(
                    result.email,
                    result.password,
                    result.firstName,
                    result.lastName,
                    result.jobTitle,
                    result.isAdmin,
                    result._id,
                    result.tasks
                )
                this.employees.push(employee);
                return employee;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }
    getEmployees() {
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.get('http://localhost:3000/company' + token, {headers: headers})
            .map((response: Response) => {
                const employees = response.json().obj;
                let transformedEmployees: Employee[] = [];
                for (let employee of employees) {
                    transformedEmployees.push(new Employee(
                        employee.email,
                        employee.password,
                        employee.firstName,
                        employee.lastName,
                        employee.jobTitle,
                        employee.isAdmin,
                        employee._id,
                        employee.tasks
                    ));
                }
                this.employees = transformedEmployees;
                return transformedEmployees;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }
    editEmployee(employee: Employee) {
        this.employeeIsEdit.emit(employee);
    }
    deleteEmployee(employee: Employee) {
        this.employees.splice(this.employees.indexOf(employee), 1);
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete('http://localhost:3000/employees/' + employee.employeeId + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
    updateEmployee(employee: Employee) {
        const body = JSON.stringify(employee);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch('http://localhost:3000/employees/' + employee.employeeId + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
    addTask(task: Task){
        const body = JSON.stringify(task);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('http://localhost:3000/task' + token, body, {headers})
            .map((response: Response) => {
                const result = response.json();
                const task = new Task(
                    result.obj.content,
                    result.obj.dueDate,
                    result.obj.completed,
                    result.obj._id,
                    result.obj.employee,
                    result.obj.employeeFirstName,
                    result.obj.employeeLastName,
                    result.obj.company,
                    true
                );
                this.tasks.push(task);
                console.log(this.tasks)
                // var newLength = this.tasks.length;
                // this.taskAdded(newLength);
                return task;
            })
            .catch((error: Response) => {
                this.error2Service.handleError(error.json());
                return Observable.throw(error.json())
            });
    }
    getTasks() {
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.get('http://localhost:3000/task' + token, {headers: headers})
            .map((response: Response) => {
                const tasks = response.json().obj;
                let transformedTasks: Task[] = [];
                for (let task of tasks) {
                    transformedTasks.push(new Task(
                        task.content,
                        task.dueDate,
                        task.completed,
                        task._id,
                        task.employee,
                        task.employeeFirstName,
                        task.employeeLastName,
                        task.company
                    ));
                }
                this.tasks = transformedTasks;
                return transformedTasks;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }
    deleteTask(task: Task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete('http://localhost:3000/task/' + task.taskId + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
    updateTask(task: Task) {
        const body = JSON.stringify(task);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch('http://localhost:3000/task/' + task.taskId + token, body, {headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }
    editTask(task: Task){
        this.taskIsEdit.emit(task);
    }
    completeTask(task: Task){
        this.taskCompletionEM.emit(task);
    }
}
