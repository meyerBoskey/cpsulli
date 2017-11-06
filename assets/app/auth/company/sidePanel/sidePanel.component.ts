import { Component, OnInit } from '@angular/core';
import {Task} from '../../tasks/task.model';
import {Employee} from '../../employees/employee.model';
import {EmployeeService} from '../../employees/employee.service';
@Component({
    selector: 'app-side-panel',
    templateUrl: './sidePanel.component.html'
})
export class SidePanelComponent implements OnInit{
    tasks: Task[] = [];
    employees: Employee[] = [];
    constructor(private employeeService: EmployeeService){}

    isCompany() {
        if (localStorage.getItem('company')) {
            return true;
        }
            return false;
    }
    ngOnInit() {
        this.employeeService.getTasks()
            .subscribe(
                (tasks: Task[]) => {
                    this.tasks = tasks;
                }
            );
        this.employeeService.getEmployees()
            .subscribe(
                (employees: Employee[]) => {
                    this.employees = employees;
                }
            );
    }
}
