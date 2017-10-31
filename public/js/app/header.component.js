var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "./auth/auth.service";
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.router.navigate(['/auth', 'signin']);
    };
    HeaderComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    HeaderComponent.prototype.isCompany = function () {
        if (localStorage.getItem('company')) {
            return true;
        }
        return false;
    };
    HeaderComponent.prototype.isEmployee = function () {
        if (localStorage.getItem('employeeID')) {
            return true;
        }
        return false;
    };
    HeaderComponent = __decorate([
        Component({
            selector: 'app-header',
            template: "\n        <header class=\"row\" style=\"padding-left: 30px; padding-top: 30px; padding-bottom: 10px;\">\n            <nav>\n                <ul class=\"nav nav-pills\">\n                    <li routerLinkActive=\"active\" *ngIf=\"isLoggedIn() && !isCompany() && !isEmployee()\"><a [routerLink]=\"['/messages']\">Tasks</a></li>\n                    <li routerLinkActive=\"active\" *ngIf=\"isLoggedIn() && isCompany()\"><a [routerLink]=\"['/employees']\">Manage Employees</a></li>\n                    <li routerLinkActive=\"active\" *ngIf=\"isLoggedIn() && isEmployee() || isCompany()\"><a [routerLink]=\"['/tasks']\">Manage Tasks</a></li>\n                    <li routerLinkActive=\"active\" *ngIf=\"!isLoggedIn()\"><a [routerLink]=\"['/auth']\">signin/signup</a></li>\n                    <li routerLinkActive=\"active\" *ngIf=\"isLoggedIn()\" (click)=\"onLogout()\"><a>logout</a></li>\n                </ul>\n            </nav>\n        </header>\n    "
        }),
        __metadata("design:paramtypes", [AuthService, Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
