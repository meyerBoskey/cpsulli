import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable} from 'rxjs/Rx';

import { EmployeeService } from './auth/employees/employee.service';

@Injectable()
export class AuthGuard implements CanActivate {

    public isLoggedIn: boolean = false;

    // public redirectUrl: string = this.router.navigate(['/auth/signin']);


    constructor(private router: Router, private employeeService: EmployeeService){

    }

    // canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //     if (!this.employeeService.isLoggedIn()) {
    //         this.redirectUrl;
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      let url: string = state.url;

      return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        if (this.employeeService.isLoggedIn()) { return true; }

        // Store the attempted URL for redirecting
        this.employeeService.redirectUrl = url;

        // Navigate to the login page with extras
        this.router.navigate(['/auth/signin']);
        return false;
      }
}
