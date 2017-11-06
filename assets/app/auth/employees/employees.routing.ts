import {Routes, RouterModule} from '@angular/router';

import {AddEmployeeComponent} from "./add/addEmployee.component";
import {EmployeeListComponent} from "./employeeList.component";
import {TasksComponent} from "../tasks/tasks.component";
import {AddTasksComponent} from "../tasks/add/addTask.component";
import {CompanyHomePageComponent} from "../company/homePage/CompanyHomePage.component";
import { AuthGuard } from '../../authGuard.guard';


const EMPLOYEES_ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'homePage', component: CompanyHomePageComponent, canActivate: [AuthGuard]},
    {path: 'add', component: AddEmployeeComponent, canActivate: [AuthGuard]},
    {path: 'addtasks', component: AddTasksComponent, canActivate: [AuthGuard]},
    {path: 'home', component: EmployeeListComponent, canActivate: [AuthGuard]},
    {path: 'tasks', component: TasksComponent, canActivate: [AuthGuard]},
    // {path: 'signin', component: SigninComponent},
    // {path: 'logout', component: LogoutComponent},
    // {path: 'createCompany', component: CreateCompanyComponent},
    // {path: 'signinCompany', component: SigninCompanyComponent},
];
export const employeesRouting = RouterModule.forChild(EMPLOYEES_ROUTES);
