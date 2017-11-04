import {Routes, RouterModule} from '@angular/router';

import {AddEmployeeComponent} from "./add/addEmployee.component";
import {TasksComponent} from "../tasks/tasks.component";
import {CompanyHomePageComponent} from "../company/homePage/CompanyHomePage.component";
import { AuthGuard } from '../../authGuard.guard';


const EMPLOYEES_ROUTES: Routes = [
    {path: 'homePage', component: CompanyHomePageComponent, canActivate: [AuthGuard]},
    {path: 'add', component: AddEmployeeComponent, canActivate: [AuthGuard]},
    {path: 'tasks', component: TasksComponent, canActivate: [AuthGuard]},
    // {path: 'signin', component: SigninComponent},
    // {path: 'logout', component: LogoutComponent},
    // {path: 'createCompany', component: CreateCompanyComponent},
    // {path: 'signinCompany', component: SigninCompanyComponent},
];
export const employeesRouting = RouterModule.forChild(EMPLOYEES_ROUTES);
