import {Routes, RouterModule} from '@angular/router';

import { MessagesComponent } from "./messages/messages.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {EmployeesComponent} from "./auth/employees/employees.component";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/auth', pathMatch: 'full'},
    {path: 'messages', component: MessagesComponent},
    {path: 'employees', component: EmployeesComponent, loadChildren: './auth/employees/employees.module#EmployeesModule'},
    {path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
