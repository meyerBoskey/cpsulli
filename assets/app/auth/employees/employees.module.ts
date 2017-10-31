import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// import {CreateCompanyComponent} from "./company/create/createCompany.component";
import {employeesRouting} from "./employees.routing";
import {EmployeesComponent} from "./employees.component";
import {AddEmployeeComponent} from "./add/addEmployee.component";
import {EmployeeComponent} from "./employee/employee.component";
import {EmployeeListComponent} from "./employeeList.component";
import { AuthService } from "../auth.service";
import { EmployeeService } from "./employee.service";
import { ErrorService } from "../../errors/error.service";
import {TasksComponent} from "../tasks/tasks.component";
import {AddTasksComponent} from "../tasks/add/addTask.component";
import {TaskComponent} from "../tasks/task/task.component";
import {TaskListComponent} from "../tasks/taskList.component";




@NgModule({
    declarations: [
        EmployeesComponent,
        EmployeeComponent,
        TasksComponent,
        AddTasksComponent,
        TaskComponent,
        TaskListComponent,
        EmployeeListComponent,
        AddEmployeeComponent
    ],
    providers: [AuthService, ErrorService, EmployeeService],
    imports: [ ReactiveFormsModule, CommonModule, employeesRouting]
})
export class EmployeesModule {

}
