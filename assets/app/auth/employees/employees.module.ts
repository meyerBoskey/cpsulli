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
import {CompanyHomePageComponent} from "../company/homePage/CompanyHomePage.component";
import {SidePanelComponent} from "../company/sidePanel/sidePanel.component";
import { DatePickerModule } from "angular-io-datepicker/src/datepicker/index";
import { OverlayModule } from "angular-io-overlay";

export function PleaseJustWork(){
    return DatePickerModule;
}


@NgModule({
    declarations: [
        EmployeesComponent,
        EmployeeComponent,
        SidePanelComponent,
        TasksComponent,
        AddTasksComponent,
        PleaseJustWorkComponent,
        TaskComponent,
        TaskListComponent,
        EmployeeListComponent,
        AddEmployeeComponent,
        CompanyHomePageComponent
    ],
    providers: [AuthService, ErrorService, EmployeeService],
    imports: [ ReactiveFormsModule, CommonModule, employeesRouting, OverlayModule, DatePickerModule].concat(PleaseJustWork())
})
export class EmployeesModule {

}