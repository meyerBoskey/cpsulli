var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import {CreateCompanyComponent} from "./company/create/createCompany.component";
import { employeesRouting } from "./employees.routing";
import { EmployeesComponent } from "./employees.component";
import { AddEmployeeComponent } from "./add/addEmployee.component";
import { EmployeeComponent } from "./employee/employee.component";
import { EmployeeListComponent } from "./employeeList.component";
import { AuthService } from "../auth.service";
import { EmployeeService } from "./employee.service";
import { ErrorService } from "../../errors/error.service";
import { Error2Service } from "./error2/error2.service";
import { Error2Component } from "./error2/error2.component";
import { TasksComponent } from "../tasks/tasks.component";
import { AddTasksComponent } from "../tasks/add/addTask.component";
import { TaskComponent } from "../tasks/task/task.component";
import { TaskListComponent } from "../tasks/taskList.component";
import { CompanyHomePageComponent } from "../company/homePage/CompanyHomePage.component";
import { SidePanelComponent } from "../company/sidePanel/sidePanel.component";
import { FilterTasksArrayPipe } from '../tasks/taskFilter.pipe';
import { FilterEmployeesArrayPipe } from './employeesFilter.pipe';
var EmployeesModule = /** @class */ (function () {
    function EmployeesModule() {
    }
    EmployeesModule = __decorate([
        NgModule({
            declarations: [
                EmployeesComponent,
                EmployeeComponent,
                SidePanelComponent,
                TasksComponent,
                FilterTasksArrayPipe,
                FilterEmployeesArrayPipe,
                AddTasksComponent,
                Error2Component,
                TaskComponent,
                TaskListComponent,
                EmployeeListComponent,
                AddEmployeeComponent,
                CompanyHomePageComponent
            ],
            providers: [AuthService, ErrorService, EmployeeService, Error2Service],
            imports: [ReactiveFormsModule, CommonModule, employeesRouting, FormsModule]
        })
    ], EmployeesModule);
    return EmployeesModule;
}());
export { EmployeesModule };
