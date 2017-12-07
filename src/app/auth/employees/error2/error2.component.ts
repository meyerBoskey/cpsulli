import {Component, OnInit} from '@angular/core';

import {Error} from './error2.model';
import {Error2Service} from './error2.service';

@Component({
    selector: 'app-error2',
    templateUrl: './error2.component.html',
    styles: [`
        .backdrop {
            background-color: rgba(0,0,0,0.6);
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
        }
    `]
})
export class Error2Component implements OnInit {
    error: Error;
    display = 'none';
    constructor(private error2Service: Error2Service) {}

    onErrorHandled() {
        this.display = 'none';
    }

    // isLoggedIn() {
    //     return this.authService.isLoggedIn();
    // }

    ngOnInit() {
        this.error2Service.errorOccurred
            .subscribe((error: Error) => {
                this.error = error;
                this.display = 'block';
            });
    }
}
