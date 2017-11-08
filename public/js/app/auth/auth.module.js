var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { EmployeeSigninComponent } from "./employees/employeeSignin.component";
import { SigninCompanyComponent } from "./company/signin/signinCompany.component";
import { CreateCompanyComponent } from "./company/create/createCompany.component";
import { authRouting } from "./auth.routing";
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        NgModule({
            declarations: [
                SignupComponent,
                SigninComponent,
                EmployeeSigninComponent,
                SigninCompanyComponent,
                CreateCompanyComponent
            ],
            imports: [ReactiveFormsModule, CommonModule, authRouting]
        })
    ], AuthModule);
    return AuthModule;
}());
export { AuthModule };