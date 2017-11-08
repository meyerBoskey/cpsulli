/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from '@angular/core';
import * as i1 from './employees.module';
import * as i2 from '../company/homePage/CompanyHomePage.component.ngfactory';
import * as i3 from './add/addEmployee.component.ngfactory';
import * as i4 from '../tasks/add/addTask.component.ngfactory';
import * as i5 from './employeeList.component.ngfactory';
import * as i6 from '../tasks/tasks.component.ngfactory';
import * as i7 from '@angular/forms';
import * as i8 from '@angular/common';
import * as i9 from '../../errors/error.service';
import * as i10 from '../auth.service';
import * as i11 from '@angular/http';
import * as i12 from '@angular/router';
import * as i13 from './employee.service';
import * as i14 from '../company/homePage/CompanyHomePage.component';
import * as i15 from '../../authGuard.guard';
import * as i16 from './add/addEmployee.component';
import * as i17 from '../tasks/add/addTask.component';
import * as i18 from './employeeList.component';
import * as i19 from '../tasks/tasks.component';
export var EmployeesModuleNgFactory = i0.ɵcmf(i1.EmployeesModule, [], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.CompanyHomePageComponentNgFactory, i3.AddEmployeeComponentNgFactory,
                    i4.AddTasksComponentNgFactory, i5.EmployeeListComponentNgFactory, i6.TasksComponentNgFactory]],
            [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i7.FormBuilder, i7.FormBuilder, []), i0.ɵmpd(4608, i7.ɵi, i7.ɵi, []), i0.ɵmpd(4608, i8.NgLocalization, i8.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(4608, i9.ErrorService, i9.ErrorService, []), i0.ɵmpd(4608, i10.AuthService, i10.AuthService, [i11.Http, i9.ErrorService, i12.Router]), i0.ɵmpd(4608, i13.EmployeeService, i13.EmployeeService, [i11.Http, i9.ErrorService]), i0.ɵmpd(512, i7.ɵba, i7.ɵba, []), i0.ɵmpd(512, i7.ReactiveFormsModule, i7.ReactiveFormsModule, []), i0.ɵmpd(512, i8.CommonModule, i8.CommonModule, []),
        i0.ɵmpd(512, i12.RouterModule, i12.RouterModule, [[2, i12.ɵa], [2, i12.Router]]),
        i0.ɵmpd(512, i1.EmployeesModule, i1.EmployeesModule, []), i0.ɵmpd(1024, i12.ROUTES, function () {
            return [[{ path: '', redirectTo: 'home', pathMatch: 'full' }, { path: 'homePage',
                        component: i14.CompanyHomePageComponent, canActivate: [i15.AuthGuard] },
                    { path: 'add', component: i16.AddEmployeeComponent, canActivate: [i15.AuthGuard] },
                    { path: 'addtasks', component: i17.AddTasksComponent, canActivate: [i15.AuthGuard] },
                    { path: 'home', component: i18.EmployeeListComponent, canActivate: [i15.AuthGuard] },
                    { path: 'tasks', component: i19.TasksComponent, canActivate: [i15.AuthGuard] }]];
        }, [])]);
});
