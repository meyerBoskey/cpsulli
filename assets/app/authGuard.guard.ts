import { Injectable } from '@angular/core';
import { CanActivate, ActivateRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable} from 'rxjs/Rx';

import { AuthService } from './auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    public isLoggedIn: boolean = false;

    public redirectUrl: string;

    constructor(private router: Router, private authService: AuthService){

    }

    canActivate(router: ActivateRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isLoggedIn()) {
            return true;
        } else {
            this.router.navigate(['/auth/signin']);
        }
    }
}
