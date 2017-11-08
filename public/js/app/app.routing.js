import { RouterModule } from '@angular/router';
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { EmployeesComponent } from "./auth/employees/employees.component";
import { AuthGuard } from './authGuard.guard';
var APP_ROUTES = [
    { path: '', redirectTo: '/auth/signup', pathMatch: 'full' },
    { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] },
    { path: 'employees', component: EmployeesComponent, canActivate: [AuthGuard], loadChildren: './auth/employees/employees.module#EmployeesModule' },
    { path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
