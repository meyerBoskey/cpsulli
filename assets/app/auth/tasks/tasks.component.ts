import { Component } from '@angular/core';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html'
})
export class TasksComponent {
    isCompany() {
        if (localStorage.getItem('company')) {
            return true
        }
        return false
    }

    isAdmin() {
        if(localStorage.getItem('isAdmin') == 'true')
            {
                return true;
            }
            return false;
    }
}
