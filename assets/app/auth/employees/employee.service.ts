import {Http, Response, Headers} from '@angular/http';
import {Injectable, EventEmitter} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

import {Employee} from './employee.model';
import {Task} from '../tasks/task.model';
import {Company} from '../company/company.model';
import {ErrorService} from '../../errors/error.service';

@Injectable()
export class EmployeeService {
    private employees: Employee[] = [];
    private tasks: Task[] = [];
    employeeIsEdit = new EventEmitter<Employee>();
    constructor(private http: Http, private errorService: ErrorService) {}

    createCompany(company: Company) {
        const body = JSON.stringify(company);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/company', body, {headers: headers})
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
                    result.obj._id,
                    result.obj.employee,
                    result.obj.employeeFirstName,
                    result.obj.employeeLastName,
                    result.obj.company,
                    true
                );
                this.tasks.push(task);
                return task;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
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


}
