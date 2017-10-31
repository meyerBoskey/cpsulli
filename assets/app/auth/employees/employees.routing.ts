import {Routes, RouterModule} from '@angular/router';

import {AddEmployeeComponent} from "./add/addEmployee.component";
import {TasksComponent} from "../tasks/tasks.component";


const EMPLOYEES_ROUTES: Routes = [
    {path: '', redirectTo: 'employees', pathMatch: 'full'},
    {path: 'add', component: AddEmployeeComponent},
    {path: 'tasks', component: TasksComponent},
    // {path: 'signin', component: SigninComponent},
    // {path: 'logout', component: LogoutComponent},
    // {path: 'createCompany', component: CreateCompanyComponent},
    // {path: 'signinCompany', component: SigninCompanyComponent},
];
export const employeesRouting = RouterModule.forChild(EMPLOYEES_ROUTES);
