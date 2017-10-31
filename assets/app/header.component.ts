import {Component} from '@angular/core';
import {Router} from '@angular/router';

import { AuthService } from "./auth/auth.service";

@Component({
    selector: 'app-header',
    template: `
        <header class="row" style="padding-left: 30px; padding-top: 30px; padding-bottom: 10px;">
            <nav>
                <ul class="nav nav-pills">
                    <li routerLinkActive="active" *ngIf="isLoggedIn() && !isCompany() && !isEmployee()"><a [routerLink]="['/messages']">Tasks</a></li>
                    <li routerLinkActive="active" *ngIf="isLoggedIn() && isCompany()"><a [routerLink]="['/employees']">Manage Employees</a></li>
                    <li routerLinkActive="active" *ngIf="isLoggedIn() && isEmployee() || isCompany()"><a [routerLink]="['/tasks']">Manage Tasks</a></li>
                    <li routerLinkActive="active" *ngIf="!isLoggedIn()"><a [routerLink]="['/auth']">signin/signup</a></li>
                    <li routerLinkActive="active" *ngIf="isLoggedIn()" (click)="onLogout()"><a>logout</a></li>
                </ul>
            </nav>
        </header>
    `
})

export class HeaderComponent {
    constructor(private authService: AuthService, private router: Router) {}

    onLogout() {
        this.authService.logout();
        this.router.navigate(['/auth', 'signin']);
    }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    isCompany() {
        if (localStorage.getItem('company')) {
            return true
        }
        return false
    }
    isEmployee() {
        if (localStorage.getItem('employeeID')) {
            return true
        }
        return false
    }
}
