var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { EventEmitter, Output } from '@angular/core';
import { Error } from './error2.model';
var Error2Service = /** @class */ (function () {
    function Error2Service() {
        this.errorOccurred = new EventEmitter();
    }
    Error2Service.prototype.handleError = function (error) {
        var errorData = new Error(error.title, error.error.message);
        this.errorOccurred.emit(errorData);
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], Error2Service.prototype, "errorOccurred", void 0);
    return Error2Service;
}());
export { Error2Service };