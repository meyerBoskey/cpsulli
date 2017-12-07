import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {SignupComponent} from "./signup.component";
import {SigninComponent} from "./signin.component";
import {EmployeeSigninComponent} from "./employees/employeeSignin.component";
import {SigninCompanyComponent} from "./company/signin/signinCompany.component";
import {CreateCompanyComponent} from "./company/create/createCompany.component";
import {authRouting} from "./auth.routing";



@NgModule({
    declarations: [
        SignupComponent,
        SigninComponent,
        EmployeeSigninComponent,
        SigninCompanyComponent,
        CreateCompanyComponent
    ],
    imports: [ ReactiveFormsModule, CommonModule, authRouting]
})
export class AuthModule {

}
