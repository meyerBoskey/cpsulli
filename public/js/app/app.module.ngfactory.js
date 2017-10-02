/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from '@angular/core';
import * as i1 from './app.module';
import * as i2 from './app.component';
import * as i3 from './messages/messages.component.ngfactory';
import * as i4 from './auth/authentication.component.ngfactory';
import * as i5 from './app.component.ngfactory';
import * as i6 from '@angular/common';
import * as i7 from '@angular/platform-browser';
import * as i8 from '@angular/http';
import * as i9 from '@angular/forms';
import * as i10 from './errors/error.service';
import * as i11 from './messages/message.service';
import * as i12 from '@angular/router';
import * as i13 from './auth/auth.service';
import * as i14 from './messages/messages.component';
import * as i15 from './auth/authentication.component';
import * as i16 from './messages/message.module';
export var AppModuleNgFactory = i0.ɵcmf(i1.AppModule, [i2.AppComponent], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.MessagesComponentNgFactory, i4.AuthenticationComponentNgFactory, i5.AppComponentNgFactory]],
            [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵm, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i6.NgLocalization, i6.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(5120, i0.APP_ID, i0.ɵf, []), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵk, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵl, []), i0.ɵmpd(4608, i7.DomSanitizer, i7.ɵe, [i6.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i7.DomSanitizer]), i0.ɵmpd(4608, i7.HAMMER_GESTURE_CONFIG, i7.HammerGestureConfig, []), i0.ɵmpd(5120, i7.EVENT_MANAGER_PLUGINS, function (p0_0, p1_0, p2_0, p2_1) {
            return [new i7.ɵDomEventsPlugin(p0_0), new i7.ɵKeyEventsPlugin(p1_0), new i7.ɵHammerGesturesPlugin(p2_0, p2_1)];
        }, [i6.DOCUMENT, i6.DOCUMENT, i6.DOCUMENT, i7.HAMMER_GESTURE_CONFIG]), i0.ɵmpd(4608, i7.EventManager, i7.EventManager, [i7.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i7.ɵDomSharedStylesHost, i7.ɵDomSharedStylesHost, [i6.DOCUMENT]), i0.ɵmpd(4608, i7.ɵDomRendererFactory2, i7.ɵDomRendererFactory2, [i7.EventManager, i7.ɵDomSharedStylesHost]),
        i0.ɵmpd(6144, i0.RendererFactory2, null, [i7.ɵDomRendererFactory2]),
        i0.ɵmpd(6144, i7.ɵSharedStylesHost, null, [i7.ɵDomSharedStylesHost]),
        i0.ɵmpd(4608, i0.Testability, i0.Testability, [i0.NgZone]), i0.ɵmpd(4608, i7.Meta, i7.Meta, [i6.DOCUMENT]), i0.ɵmpd(4608, i7.Title, i7.Title, [i6.DOCUMENT]),
        i0.ɵmpd(4608, i8.BrowserXhr, i8.BrowserXhr, []), i0.ɵmpd(4608, i8.ResponseOptions, i8.BaseResponseOptions, []), i0.ɵmpd(5120, i8.XSRFStrategy, i8.ɵb, []), i0.ɵmpd(4608, i8.XHRBackend, i8.XHRBackend, [i8.BrowserXhr,
            i8.ResponseOptions, i8.XSRFStrategy]), i0.ɵmpd(4608, i8.RequestOptions, i8.BaseRequestOptions, []), i0.ɵmpd(5120, i8.Http, i8.ɵc, [i8.XHRBackend,
            i8.RequestOptions]), i0.ɵmpd(4608, i9.ɵi, i9.ɵi, []), i0.ɵmpd(4608, i10.ErrorService, i10.ErrorService, []), i0.ɵmpd(4608, i11.MessageService, i11.MessageService, [i8.Http, i10.ErrorService]), i0.ɵmpd(5120, i12.ActivatedRoute, i12.ɵf, [i12.Router]), i0.ɵmpd(4608, i12.NoPreloading, i12.NoPreloading, []), i0.ɵmpd(6144, i12.PreloadingStrategy, null, [i12.NoPreloading]),
        i0.ɵmpd(135680, i12.RouterPreloader, i12.RouterPreloader, [i12.Router, i0.NgModuleFactoryLoader,
            i0.Compiler, i0.Injector, i12.PreloadingStrategy]), i0.ɵmpd(4608, i12.PreloadAllModules, i12.PreloadAllModules, []), i0.ɵmpd(5120, i12.ROUTER_INITIALIZER, i12.ɵi, [i12.ɵg]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) {
            return [p0_0];
        }, [i12.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i13.AuthService, i13.AuthService, [i8.Http, i10.ErrorService]), i0.ɵmpd(512, i6.CommonModule, i6.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i7.ɵa, []), i0.ɵmpd(1024, i0.NgProbeToken, function () {
            return [i12.ɵb()];
        }, []), i0.ɵmpd(512, i12.ɵg, i12.ɵg, [i0.Injector]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p0_1, p1_0) {
            return [i7.ɵc(p0_0, p0_1), i12.ɵh(p1_0)];
        }, [[2, i7.NgProbeToken], [2, i0.NgProbeToken], i12.ɵg]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ɵe, i0.ɵe, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver,
            i0.ApplicationInitStatus]), i0.ɵmpd(2048, i0.ApplicationRef, null, [i0.ɵe]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]),
        i0.ɵmpd(512, i7.BrowserModule, i7.BrowserModule, [[3, i7.BrowserModule]]), i0.ɵmpd(1024, i12.ɵa, i12.ɵd, [[3, i12.Router]]), i0.ɵmpd(512, i12.UrlSerializer, i12.DefaultUrlSerializer, []), i0.ɵmpd(512, i12.ChildrenOutletContexts, i12.ChildrenOutletContexts, []), i0.ɵmpd(256, i12.ROUTER_CONFIGURATION, {}, []),
        i0.ɵmpd(1024, i6.LocationStrategy, i12.ɵc, [i6.PlatformLocation, [2, i6.APP_BASE_HREF],
            i12.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i6.Location, i6.Location, [i6.LocationStrategy]),
        i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]),
        i0.ɵmpd(1024, i12.ROUTES, function () {
            return [[{ path: '', redirectTo: '/messages', pathMatch: 'full' }, { path: 'messages',
                        component: i14.MessagesComponent }, { path: 'auth', component: i15.AuthenticationComponent,
                        loadChildren: './auth/auth.module#AuthModule' }]];
        }, []), i0.ɵmpd(1024, i12.Router, i12.ɵe, [i0.ApplicationRef, i12.UrlSerializer,
            i12.ChildrenOutletContexts, i6.Location, i0.Injector, i0.NgModuleFactoryLoader,
            i0.Compiler, i12.ROUTES, i12.ROUTER_CONFIGURATION, [2, i12.UrlHandlingStrategy],
            [2, i12.RouteReuseStrategy]]), i0.ɵmpd(512, i12.RouterModule, i12.RouterModule, [[2, i12.ɵa], [2, i12.Router]]), i0.ɵmpd(512, i8.HttpModule, i8.HttpModule, []), i0.ɵmpd(512, i9.ɵba, i9.ɵba, []), i0.ɵmpd(512, i9.FormsModule, i9.FormsModule, []), i0.ɵmpd(512, i16.MessageModule, i16.MessageModule, []), i0.ɵmpd(512, i1.AppModule, i1.AppModule, [])]);
});
