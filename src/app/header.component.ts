import {Component} from '@angular/core';
import {Router} from '@angular/router';

import { AuthService } from "./auth/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    constructor(private authService: AuthService, private router: Router) {}
    companyName;
    employeeName;
    onLogout() {
        this.authService.logout();
        this.router.navigate(['/auth', 'signin']);
    }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    isCompany() {
        if (localStorage.getItem('company')) {
            this.companyName = localStorage.getItem('company');
            return true
        }
        return false
    }
    isEmployee() {
        if (localStorage.getItem('employeeID')) {
            this.employeeName = localStorage.getItem('firstName');
            return true
        }
        return false
    }
}
