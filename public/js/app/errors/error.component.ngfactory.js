/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from '@angular/core';
import * as i1 from '@angular/router';
import * as i2 from '@angular/common';
import * as i3 from './error.component';
import * as i4 from './error.service';
import * as i5 from '../auth/auth.service';
var styles_ErrorComponent = ['.backdrop[_ngcontent-%COMP%] {\n            background-color: rgba(0,0,0,0.6);\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100vh;\n        }'];
export var RenderType_ErrorComponent = i0.ɵcrt({ encapsulation: 0,
    styles: styles_ErrorComponent, data: {} });
function View_ErrorComponent_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, 'button', [['class',
                'btn btn-default'], ['type', 'button']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (i0.ɵnov(_v, 1).onClick() !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                var pd_1 = (_co.onErrorHandled() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(1, 16384, null, 0, i1.RouterLink, [i1.Router, i1.ActivatedRoute, [8, null], i0.Renderer2, i0.ElementRef], { routerLink: [0,
                'routerLink'] }, null), i0.ɵpad(2, 1), (_l()(), i0.ɵted(-1, null, ['signin page']))], function (_ck, _v) {
        var currVal_0 = _ck(_v, 2, 0, 'auth/signin');
        _ck(_v, 1, 0, currVal_0);
    }, null);
}
function View_ErrorComponent_2(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, 'button', [['class',
                'btn btn-default'], ['type', 'button']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (i0.ɵnov(_v, 1).onClick() !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                var pd_1 = (_co.onErrorHandled() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(1, 16384, null, 0, i1.RouterLink, [i1.Router, i1.ActivatedRoute, [8, null], i0.Renderer2, i0.ElementRef], { routerLink: [0,
                'routerLink'] }, null), i0.ɵpad(2, 1), (_l()(), i0.ɵted(-1, null, ['signup page']))], function (_ck, _v) {
        var currVal_0 = _ck(_v, 2, 0, 'auth/signup');
        _ck(_v, 1, 0, currVal_0);
    }, null);
}
export function View_ErrorComponent_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, 'div', [['class',
                'backdrop']], null, null, null, null, null)),
        i0.ɵdid(1, 278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef,
            i0.Renderer], { ngStyle: [0, 'ngStyle'] }, null), i0.ɵpod(2, { 'display': 0 }),
        (_l()(), i0.ɵted(-1, null, ['\n'])), (_l()(), i0.ɵeld(4, 0, null, null, 39, 'div', [['class', 'modal'], ['role', 'dialog'], ['tabindex',
                '-1']], null, null, null, null, null)),
        i0.ɵdid(5, 278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef,
            i0.Renderer], { ngStyle: [0, 'ngStyle'] }, null), i0.ɵpod(6, { 'display': 0 }),
        (_l()(), i0.ɵted(-1, null, ['\n    '])), (_l()(), i0.ɵeld(8, 0, null, null, 33, 'div', [['class', 'modal-dialog'], ['role', 'document']], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['\n        '])), (_l()(), i0.ɵeld(10, 0, null, null, 29, 'div', [['class', 'modal-content']], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['\n            '])),
        (_l()(), i0.ɵeld(12, 0, null, null, 8, 'div', [['class', 'modal-header']], null, null, null, null, null)),
        (_l()(), i0.ɵted(-1, null, ['\n                '])), (_l()(), i0.ɵeld(14, 0, null, null, 2, 'button', [['aria-label', 'Close'], ['class',
                'close'], ['type', 'button']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onErrorHandled() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵeld(15, 0, null, null, 1, 'span', [['aria-hidden', 'true']], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['×'])), (_l()(),
            i0.ɵted(-1, null, ['\n                '])), (_l()(), i0.ɵeld(18, 0, null, null, 1, 'h4', [['class', 'modal-title']], null, null, null, null, null)), (_l()(), i0.ɵted(19, null, ['', ''])), (_l()(), i0.ɵted(-1, null, ['\n            '])), (_l()(),
            i0.ɵted(-1, null, ['\n            '])), (_l()(), i0.ɵeld(22, 0, null, null, 4, 'div', [['class', 'modal-body']], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['\n                '])), (_l()(), i0.ɵeld(24, 0, null, null, 1, 'p', [], null, null, null, null, null)), (_l()(), i0.ɵted(25, null, ['', ''])), (_l()(), i0.ɵted(-1, null, ['\n            '])), (_l()(), i0.ɵted(-1, null, ['\n            '])),
        (_l()(), i0.ɵeld(28, 0, null, null, 10, 'div', [['class', 'modal-footer']], null, null, null, null, null)),
        (_l()(), i0.ɵted(-1, null, ['\n                '])), (_l()(), i0.ɵeld(30, 0, null, null, 1, 'button', [['class', 'btn btn-default'], ['type',
                'button']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onErrorHandled() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(-1, null, ['Close'])),
        (_l()(), i0.ɵted(-1, null, ['\n                '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_ErrorComponent_1)), i0.ɵdid(34, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵted(-1, null, ['\n                '])),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_ErrorComponent_2)),
        i0.ɵdid(37, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i0.ɵted(-1, null, ['\n            '])),
        (_l()(), i0.ɵted(-1, null, ['\n        '])), (_l()(), i0.ɵted(-1, null, ['\n        '])), (_l()(), i0.ɵted(-1, null, ['\n    '])), (_l()(), i0.ɵted(-1, null, ['\n    '])), (_l()(), i0.ɵted(-1, null, ['\n'])), (_l()(),
            i0.ɵted(-1, null, ['\n'])), (_l()(), i0.ɵted(-1, null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _ck(_v, 2, 0, _co.display);
        _ck(_v, 1, 0, currVal_0);
        var currVal_1 = _ck(_v, 6, 0, _co.display);
        _ck(_v, 5, 0, currVal_1);
        var currVal_4 = !_co.isLoggedIn();
        _ck(_v, 34, 0, currVal_4);
        var currVal_5 = !_co.isLoggedIn();
        _ck(_v, 37, 0, currVal_5);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = ((_co.error == null) ? null : _co.error.title);
        _ck(_v, 19, 0, currVal_2);
        var currVal_3 = ((_co.error == null) ? null : _co.error.message);
        _ck(_v, 25, 0, currVal_3);
    });
}
export function View_ErrorComponent_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, 'app-error', [], null, null, null, View_ErrorComponent_0, RenderType_ErrorComponent)), i0.ɵdid(1, 114688, null, 0, i3.ErrorComponent, [i4.ErrorService, i5.AuthService], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
export var ErrorComponentNgFactory = i0.ɵccf('app-error', i3.ErrorComponent, View_ErrorComponent_Host_0, {}, {}, []);
