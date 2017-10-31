import { RouterModule } from '@angular/router';
import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { EmployeeSigninComponent } from "./employees/employeeSignin.component";
import { CreateCompanyComponent } from "./company/create/createCompany.component";
import { SigninCompanyComponent } from "./company/signin/signinCompany.component";
var AUTH_ROUTES = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'employeeSignin', component: EmployeeSigninComponent },
    { path: 'createCompany', component: CreateCompanyComponent },
    { path: 'signinCompany', component: SigninCompanyComponent },
];
export var authRouting = RouterModule.forChild(AUTH_ROUTES);
