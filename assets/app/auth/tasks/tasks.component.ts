import { Component } from '@angular/core';

@Component({
    selector: 'app-tasks',
    template: `
    <div class="container-fluid" *ngIf="isCompany() == true">
        <div class="row content" style="height: 550px;">
            <div class="col-md-4" style="height: 100%;">
                <h1 style="color: #ffffff">Employees</h1>
                <app-employee-list></app-employee-list>
            </div>
            <div class="col-md-8">
                <div class="row" style="padding-left: 30px;">
                    <app-add-tasks></app-add-tasks>
                </div>
                <hr>
                <div class="row" style="padding-left: 30px;">
                    <h3 style="color: #ffffff;">Tasks</h3>
                    <app-task-list></app-task-list>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid" *ngIf="isCompany() == false">
        <div class="row" style="padding-left: 30px;">
            <app-add-tasks></app-add-tasks>
        </div>
        <hr>
        <div class="row" style="padding-left: 30px;">
            <h3 style="color: #ffffff;">Tasks</h3>
            <app-task-list></app-task-list>
        </div>
    </div>
    `
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
