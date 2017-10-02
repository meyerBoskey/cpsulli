import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {LogoutComponent} from "./logout.component";
import {SignupComponent} from "./signup.component";
import {SigninComponent} from "./signin.component";
import {authRouting} from "./auth.routing";



@NgModule({
    declarations: [
        SignupComponent,
        SigninComponent,
        LogoutComponent
    ],
    imports: [ ReactiveFormsModule, CommonModule, authRouting]
})
export class AuthModule {

}
