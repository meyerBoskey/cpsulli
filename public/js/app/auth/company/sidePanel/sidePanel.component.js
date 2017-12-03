var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { EmployeeService } from '../../employees/employee.service';
var SidePanelComponent = /** @class */ (function () {
    function SidePanelComponent(employeeService) {
        this.employeeService = employeeService;
        this.tasks = [];
        this.employees = [];
    }
    SidePanelComponent.prototype.isCompany = function () {
        if (localStorage.getItem('company')) {
            return true;
        }
        return false;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SidePanelComponent.prototype, "tasksLength", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SidePanelComponent.prototype, "employeesLength", void 0);
    SidePanelComponent = __decorate([
        Component({
            selector: 'app-side-panel',
            templateUrl: './sidePanel.component.html'
        }),
        __metadata("design:paramtypes", [EmployeeService])
    ], SidePanelComponent);
    return SidePanelComponent;
}());
export { SidePanelComponent };
