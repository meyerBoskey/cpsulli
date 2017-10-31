/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from '@angular/core';
import * as i1 from './app.module';
import * as i2 from './app.component';
import * as i3 from './auth/employees/add/addEmployee.component.ngfactory';
import * as i4 from './auth/tasks/tasks.component.ngfactory';
import * as i5 from './messages/messages.component.ngfactory';
import * as i6 from './auth/employees/employees.component.ngfactory';
import * as i7 from './auth/authentication.component.ngfactory';
import * as i8 from './app.component.ngfactory';
import * as i9 from '@angular/common';
import * as i10 from '@angular/platform-browser';
import * as i11 from '@angular/http';
import * as i12 from '@angular/forms';
import * as i13 from './errors/error.service';
import * as i14 from './messages/message.service';
import * as i15 from './auth/auth.service';
import * as i16 from './auth/employees/employee.service';
import * as i17 from '@angular/router';
import * as i18 from './auth/employees/add/addEmployee.component';
import * as i19 from './auth/tasks/tasks.component';
import * as i20 from './messages/messages.component';
import * as i21 from './auth/employees/employees.component';
import * as i22 from './auth/authentication.component';
import * as i23 from './messages/message.module';
import * as i24 from './auth/employees/employees.module';
export var AppModuleNgFactory = i0.ɵcmf(i1.AppModule, [i2.AppComponent], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.AddEmployeeComponentNgFactory, i4.TasksComponentNgFactory, i5.MessagesComponentNgFactory,
                    i6.EmployeesComponentNgFactory, i7.AuthenticationComponentNgFactory, i8.AppComponentNgFactory]],
            [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵm, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i9.NgLocalization, i9.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(5120, i0.APP_ID, i0.ɵf, []), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵk, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵl, []), i0.ɵmpd(4608, i10.DomSanitizer, i10.ɵe, [i9.DOCUMENT]),
        i0.ɵmpd(6144, i0.Sanitizer, null, [i10.DomSanitizer]), i0.ɵmpd(4608, i10.HAMMER_GESTURE_CONFIG, i10.HammerGestureConfig, []), i0.ɵmpd(5120, i10.EVENT_MANAGER_PLUGINS, function (p0_0, p1_0, p2_0, p2_1) {
            return [new i10.ɵDomEventsPlugin(p0_0), new i10.ɵKeyEventsPlugin(p1_0),
                new i10.ɵHammerGesturesPlugin(p2_0, p2_1)];
        }, [i9.DOCUMENT, i9.DOCUMENT, i9.DOCUMENT, i10.HAMMER_GESTURE_CONFIG]), i0.ɵmpd(4608, i10.EventManager, i10.EventManager, [i10.EVENT_MANAGER_PLUGINS, i0.NgZone]),
        i0.ɵmpd(135680, i10.ɵDomSharedStylesHost, i10.ɵDomSharedStylesHost, [i9.DOCUMENT]),
        i0.ɵmpd(4608, i10.ɵDomRendererFactory2, i10.ɵDomRendererFactory2, [i10.EventManager,
            i10.ɵDomSharedStylesHost]), i0.ɵmpd(6144, i0.RendererFactory2, null, [i10.ɵDomRendererFactory2]), i0.ɵmpd(6144, i10.ɵSharedStylesHost, null, [i10.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i0.Testability, i0.Testability, [i0.NgZone]), i0.ɵmpd(4608, i10.Meta, i10.Meta, [i9.DOCUMENT]), i0.ɵmpd(4608, i10.Title, i10.Title, [i9.DOCUMENT]), i0.ɵmpd(4608, i11.BrowserXhr, i11.BrowserXhr, []), i0.ɵmpd(4608, i11.ResponseOptions, i11.BaseResponseOptions, []), i0.ɵmpd(5120, i11.XSRFStrategy, i11.ɵb, []), i0.ɵmpd(4608, i11.XHRBackend, i11.XHRBackend, [i11.BrowserXhr, i11.ResponseOptions, i11.XSRFStrategy]),
        i0.ɵmpd(4608, i11.RequestOptions, i11.BaseRequestOptions, []), i0.ɵmpd(5120, i11.Http, i11.ɵc, [i11.XHRBackend, i11.RequestOptions]), i0.ɵmpd(4608, i12.ɵi, i12.ɵi, []), i0.ɵmpd(4608, i13.ErrorService, i13.ErrorService, []), i0.ɵmpd(4608, i14.MessageService, i14.MessageService, [i11.Http,
            i13.ErrorService]), i0.ɵmpd(4608, i12.FormBuilder, i12.FormBuilder, []),
        i0.ɵmpd(4608, i15.AuthService, i15.AuthService, [i11.Http, i13.ErrorService]),
        i0.ɵmpd(4608, i16.EmployeeService, i16.EmployeeService, [i11.Http, i13.ErrorService]),
        i0.ɵmpd(5120, i17.ActivatedRoute, i17.ɵf, [i17.Router]), i0.ɵmpd(4608, i17.NoPreloading, i17.NoPreloading, []), i0.ɵmpd(6144, i17.PreloadingStrategy, null, [i17.NoPreloading]), i0.ɵmpd(135680, i17.RouterPreloader, i17.RouterPreloader, [i17.Router, i0.NgModuleFactoryLoader, i0.Compiler,
            i0.Injector, i17.PreloadingStrategy]), i0.ɵmpd(4608, i17.PreloadAllModules, i17.PreloadAllModules, []), i0.ɵmpd(5120, i17.ROUTER_INITIALIZER, i17.ɵi, [i17.ɵg]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) {
            return [p0_0];
        }, [i17.ROUTER_INITIALIZER]), i0.ɵmpd(512, i9.CommonModule, i9.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i10.ɵa, []), i0.ɵmpd(1024, i0.NgProbeToken, function () {
            return [i17.ɵb()];
        }, []), i0.ɵmpd(512, i17.ɵg, i17.ɵg, [i0.Injector]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p0_1, p1_0) {
            return [i10.ɵc(p0_0, p0_1), i17.ɵh(p1_0)];
        }, [[2, i10.NgProbeToken], [2, i0.NgProbeToken], i17.ɵg]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ɵe, i0.ɵe, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver,
            i0.ApplicationInitStatus]), i0.ɵmpd(2048, i0.ApplicationRef, null, [i0.ɵe]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]),
        i0.ɵmpd(512, i10.BrowserModule, i10.BrowserModule, [[3, i10.BrowserModule]]),
        i0.ɵmpd(1024, i17.ɵa, i17.ɵd, [[3, i17.Router]]), i0.ɵmpd(512, i17.UrlSerializer, i17.DefaultUrlSerializer, []), i0.ɵmpd(512, i17.ChildrenOutletContexts, i17.ChildrenOutletContexts, []), i0.ɵmpd(256, i17.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i9.LocationStrategy, i17.ɵc, [i9.PlatformLocation,
            [2, i9.APP_BASE_HREF], i17.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i9.Location, i9.Location, [i9.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]), i0.ɵmpd(1024, i17.ROUTES, function () {
            return [[{ path: '', redirectTo: 'employees', pathMatch: 'full' }, { path: 'add',
                        component: i18.AddEmployeeComponent }, { path: 'tasks', component: i19.TasksComponent }],
                [{ path: '', redirectTo: '/auth', pathMatch: 'full' }, { path: 'messages',
                        component: i20.MessagesComponent }, { path: 'employees', component: i21.EmployeesComponent,
                        loadChildren: './auth/employees/employees.module#EmployeesModule' },
                    { path: 'auth', component: i22.AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' }]];
        }, []), i0.ɵmpd(1024, i17.Router, i17.ɵe, [i0.ApplicationRef, i17.UrlSerializer,
            i17.ChildrenOutletContexts, i9.Location, i0.Injector, i0.NgModuleFactoryLoader,
            i0.Compiler, i17.ROUTES, i17.ROUTER_CONFIGURATION, [2, i17.UrlHandlingStrategy],
            [2, i17.RouteReuseStrategy]]), i0.ɵmpd(512, i17.RouterModule, i17.RouterModule, [[2, i17.ɵa], [2, i17.Router]]), i0.ɵmpd(512, i11.HttpModule, i11.HttpModule, []), i0.ɵmpd(512, i12.ɵba, i12.ɵba, []), i0.ɵmpd(512, i12.FormsModule, i12.FormsModule, []), i0.ɵmpd(512, i23.MessageModule, i23.MessageModule, []), i0.ɵmpd(512, i12.ReactiveFormsModule, i12.ReactiveFormsModule, []), i0.ɵmpd(512, i24.EmployeesModule, i24.EmployeesModule, []), i0.ɵmpd(512, i1.AppModule, i1.AppModule, [])]);
});
