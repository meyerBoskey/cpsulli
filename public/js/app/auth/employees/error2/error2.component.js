var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Error2Service } from './error2.service';
var Error2Component = /** @class */ (function () {
    function Error2Component(error2Service) {
        this.error2Service = error2Service;
        this.display = 'none';
    }
    Error2Component.prototype.onErrorHandled = function () {
        this.display = 'none';
    };
    // isLoggedIn() {
    //     return this.authService.isLoggedIn();
    // }
    Error2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.error2Service.errorOccurred
            .subscribe(function (error) {
            _this.error = error;
            _this.display = 'block';
        });
    };
    Error2Component = __decorate([
        Component({
            selector: 'app-error2',
            templateUrl: './error2.component.html',
            styles: ["\n        .backdrop {\n            background-color: rgba(0,0,0,0.6);\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100vh;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [Error2Service])
    ], Error2Component);
    return Error2Component;
}());
export { Error2Component };
