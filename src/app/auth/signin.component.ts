import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import { AuthService } from "./auth.service";
import {User} from "./user.model";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent {
    myForm: FormGroup;
    constructor(private authService: AuthService, private router: Router) {}

    onSubmit() {
        const user = new User(
            this.myForm.value.email,
            this.myForm.value.password
        );
        this.authService.signin(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userID', data.userId);
                    localStorage.setItem('isAdmin', data.isAdmin);
                    this.router.navigateByUrl('/messages');
                },
                error => console.error(error)
            )
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            password: new FormControl('', Validators.required)
        });
    }

}
