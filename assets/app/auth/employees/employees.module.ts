import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

// import {CreateCompanyComponent} from "./company/create/createCompany.component";
import {employeesRouting} from "./employees.routing";
import {EmployeesComponent} from "./employees.component";
import {AddEmployeeComponent} from "./add/addEmployee.component";
import {EmployeeComponent} from "./employee/employee.component";
import {EmployeeListComponent} from "./employeeList.component";
import { AuthService } from "../auth.service";
import { EmployeeService } from "./employee.service";
import { ErrorService } from "../../errors/error.service";
import { Error2Service } from "./error2/error2.service";
import { Error2Component } from "./error2/error2.component";
import {TasksComponent} from "../tasks/tasks.component";
import {AddTasksComponent} from "../tasks/add/addTask.component";
import {TaskComponent} from "../tasks/task/task.component";
import {TaskListComponent} from "../tasks/taskList.component";
import {CompanyHomePageComponent} from "../company/homePage/CompanyHomePage.component";
import {SidePanelComponent} from "../company/sidePanel/sidePanel.component";
import { FilterTasksArrayPipe } from '../tasks/taskFilter.pipe';
import { FilterEmployeesArrayPipe } from './employeesFilter.pipe';
import { DatepickerComponent } from '../tasks/add/datepicker/datepicker.component'

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import {DatepickerStartViewExample} from './app/datepicker-start-view-example';
import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
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
        CompanyHomePageComponent,
        DatepickerComponent
    ],
    providers: [AuthService, ErrorService, EmployeeService, Error2Service],
    imports: [ ReactiveFormsModule, CommonModule, employeesRouting, FormsModule,
             CdkTableModule,
            MatAutocompleteModule,
            MatButtonModule,
            MatButtonToggleModule,
            MatCardModule,
            MatCheckboxModule,
            MatChipsModule,
            MatStepperModule,
            MatDatepickerModule,
            MatDialogModule,
            MatExpansionModule,
            MatGridListModule,
            MatIconModule,
            MatInputModule,
            MatListModule,
            MatMenuModule,
            MatNativeDateModule,
            MatPaginatorModule,
            MatProgressBarModule,
            MatProgressSpinnerModule,
            MatRadioModule,
            MatRippleModule,
            MatSelectModule,
            MatSidenavModule,
            MatSliderModule,
            MatSlideToggleModule,
            MatSnackBarModule,
            MatSortModule,
            MatTableModule,
            MatTabsModule,
            MatToolbarModule,
            MatTooltipModule,

    MatNativeDateModule]
})
export class EmployeesModule {}

// platformBrowserDynamic().bootstrapModule(EmployeesModule);
