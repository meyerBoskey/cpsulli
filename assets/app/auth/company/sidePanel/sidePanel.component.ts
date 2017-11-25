import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../../tasks/task.model';
import {Employee} from '../../employees/employee.model';
import {EmployeeService} from '../../employees/employee.service';
@Component({
    selector: 'app-side-panel',
    templateUrl: './sidePanel.component.html'
})
export class SidePanelComponent implements OnInit{
    tasks: Task[] = [];
    @Input() tasksLength;
    @Input() employeesLength;
    employees: Employee[] = [];
    constructor(private employeeService: EmployeeService){
        // this.employeeService.taskWasAdded.subscribe((task: Task) => {
        //     console.log('taskWasAdded');
        //     this.tasksLength++;
        // });

    }

    isCompany() {
        if (localStorage.getItem('company')) {
            return true;
        }
            return false;
    }

    // updateTaskCount(){
    //     console.log('updateTaskCount');
    //     this.tasksLength++
    // }

    ngOnInit() {
        this.employeeService.currentTaskLength.subscribe(tasksLength => {
            // console.log(tasksLength);
            this.tasksLength = tasksLength
        });
        // this.employeeService.taskWasAdded.subscribe((task: Task) => {
        //     console.log('taskWasAdded');
        //     this.tasksLength++;
        // });
    }

    // ngOnInit() {
        // this.employeeService.getTaskLength()
        //     .subscribe(
        //         (tasksLength: number) => {
        //             this.tasksLength = tasksLength
        //         }
        //     );
    //     this.employeeService.getTasks()
    //         .subscribe(
    //             (tasks: Task[]) => {
    //                 this.tasks = tasks;
    //                 let tasksLength = tasks.length;
    //                 this.tasksLength = tasksLength
    //             }
    //         );
    //     this.employeeService.getEmployees()
    //         .subscribe(
    //             (employees: Employee[]) => {
    //                 this.employees = employees;
    //                 let employeesLength = employees.length;
    //             }
    //         );
    // }
    // incrementTasks() {
    //     this.tasksLength = this.tasksLength + 1;
    // }
}
