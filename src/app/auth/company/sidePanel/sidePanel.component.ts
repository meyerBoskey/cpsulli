import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../../tasks/task.model';
import {Employee} from '../../employees/employee.model';
import {EmployeeService} from '../../employees/employee.service';
@Component({
    selector: 'app-side-panel',
    templateUrl: './sidePanel.component.html'
})
export class SidePanelComponent{
    tasks: Task[] = [];
    @Input() tasksLength;
    @Input() employeesLength;
    employees: Employee[] = [];
    constructor(private employeeService: EmployeeService){}

    isCompany() {
        if (localStorage.getItem('company')) {
            return true;
        }
            return false;
    }


}
