import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { EmployeeService } from "../employees/employee.service";
import { Employee } from "../employees/employee.model";
import { Company } from "../company/company.model";
import { Task } from "./task.model";
import { FilterArrayPipe} from '../../filter.pipe';

@Component({
    selector: 'app-task-list',
    templateUrl: './taskList.component.html'
})
export class TaskListComponent implements OnInit {
    tasks: Task[];
    // filterInput = document.getElementById('filterInput');
    // filterInput.addEventListener('keyup', filterNames);

    constructor(private employeeService: EmployeeService) {}

    ngOnInit() {
        this.employeeService.getTasks()
            .subscribe(
                (tasks: Task[]) => {
                    this.tasks = tasks;
                }
            );
    }

    function filterNames() {
        // Get value of Input
        let filterValue = document.getElementById('filterInput').value.toUpperCase();
        // Get names uL
        let table = document.getElementById('tasks');
        // Get lis from uL
        let row = table.querySelectorAll('tr.collection-item');

        // Loop through collection-item Lis
        for (let i = 0; i < li.length; i++) {
            let tr = row[i].getElementsByTagName('tr')[0];
            // If matched
            if (tr.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
                row[i].style.display = '';
            } else {
                row[i].style.display = 'none';
            }
        }
    }
}
