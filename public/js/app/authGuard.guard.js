var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from './auth/employees/employee.service';
var AuthGuard = /** @class */ (function () {
    // public redirectUrl: string = this.router.navigate(['/auth/signin']);
    function AuthGuard(router, employeeService) {
        this.router = router;
        this.employeeService = employeeService;
        this.isLoggedIn = false;
    }
    // canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //     if (!this.employeeService.isLoggedIn()) {
    //         this.redirectUrl;
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.employeeService.isLoggedIn()) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.employeeService.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['/auth/signin']);
        return false;
    };
    AuthGuard = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Router, EmployeeService])
    ], AuthGuard);
    return AuthGuard;
}());
export { AuthGuard };
