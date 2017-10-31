var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var TasksComponent = /** @class */ (function () {
    function TasksComponent() {
    }
    TasksComponent.prototype.isCompany = function () {
        if (localStorage.getItem('company')) {
            return true;
        }
        return false;
    };
    TasksComponent.prototype.isAdmin = function () {
        if (localStorage.getItem('isAdmin') == 'true') {
            return true;
        }
        return false;
    };
    TasksComponent = __decorate([
        Component({
            selector: 'app-tasks',
            template: "\n    <div class=\"container-fluid\" *ngIf=\"isCompany() == true\">\n        <div class=\"row content\" style=\"height: 550px;\">\n            <div class=\"col-md-4\" style=\"height: 100%;\">\n                <h1 style=\"color: #ffffff\">Employees</h1>\n                <app-employee-list></app-employee-list>\n            </div>\n            <div class=\"col-md-8\">\n                <div class=\"row\" style=\"padding-left: 30px;\">\n                    <app-add-tasks></app-add-tasks>\n                </div>\n                <hr>\n                <div class=\"row\" style=\"padding-left: 30px;\">\n                    <h3 style=\"color: #ffffff;\">Tasks</h3>\n                    <app-task-list></app-task-list>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"container-fluid\" *ngIf=\"isCompany() == false\">\n        <div class=\"row\" style=\"padding-left: 30px;\">\n            <app-add-tasks></app-add-tasks>\n        </div>\n        <hr>\n        <div class=\"row\" style=\"padding-left: 30px;\">\n            <h3 style=\"color: #ffffff;\">Tasks</h3>\n            <app-task-list></app-task-list>\n        </div>\n    </div>\n    "
        })
    ], TasksComponent);
    return TasksComponent;
}());
export { TasksComponent };
