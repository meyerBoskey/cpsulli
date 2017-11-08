/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from './employee.component';
import * as i3 from '../employee.service';
import * as i4 from '@angular/router';
const styles_EmployeeComponent:any[] = ['.author[_ngcontent-%COMP%] {\n        display: inline-block;\n        font-style: italic;\n        font-size: 12px;\n        width: 100%;\n    }\n    .config[_ngcontent-%COMP%] {\n        display: inline-block;\n        text-align: right;\n        font-size: 12px;\n        width: 30%;\n    }'];
export const RenderType_EmployeeComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:0,
    styles:styles_EmployeeComponent,data:{}});
function View_EmployeeComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),2,'a',[['class',
      'btn btn-default']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.onEdit()) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),(_l()(),i0.ɵeld(1,0,(null as any),(null as any),
      1,'strong',([] as any[]),(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted(-1,(null as any),['Edit']))],(null as any),(null as any));
}
function View_EmployeeComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),2,'a',[['class',
      'btn btn-danger']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.onDelete()) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),(_l()(),i0.ɵeld(1,0,(null as any),(null as any),
      1,'strong',([] as any[]),(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted(-1,(null as any),['Delete']))],(null as any),
      (null as any));
}
export function View_EmployeeComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),29,'table',[['class',
      'table table-striped table-hover']],(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n    '])),
      (_l()(),i0.ɵeld(2,0,(null as any),(null as any),27,'tbody',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵeld(3,
          0,(null as any),(null as any),25,'tr',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i0.ɵeld(5,0,(null as any),(null as any),1,'td',
          [['class','col-md-3']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted(6,(null as any),['\n            ','\n        '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),i0.ɵeld(8,0,(null as any),
          (null as any),1,'td',[['class','col-md-3']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(9,(null as any),
          ['\n            ','\n        '])),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i0.ɵeld(11,0,(null as any),(null as any),1,'td',[['class','col-md-3']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(12,(null as any),['\n            ','\n        '])),(_l()(),i0.ɵted(-1,
          (null as any),['\n        '])),(_l()(),i0.ɵeld(14,0,(null as any),(null as any),
          1,'td',[['class','col-md-3']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted(15,(null as any),['\n            ',
          '\n        '])),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),
          i0.ɵeld(17,0,(null as any),(null as any),10,'td',[['class','col-md-3']],
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),i0.ɵeld(19,0,(null as any),
          (null as any),7,'div',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n                '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_EmployeeComponent_1)),
      i0.ɵdid(22,16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n                '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_EmployeeComponent_2)),
      i0.ɵdid(25,16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n            '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n\n        '])),(_l()(),i0.ɵted(-1,(null as any),
          ['\n    '])),(_l()(),i0.ɵted(-1,(null as any),['\n'])),(_l()(),i0.ɵted(-1,
          (null as any),['\n']))],(_ck,_v) => {
    var _co:i2.EmployeeComponent = _v.component;
    const currVal_4:any = (_co.router.url === '/employees');
    _ck(_v,22,0,currVal_4);
    const currVal_5:any = (_co.router.url === '/employees');
    _ck(_v,25,0,currVal_5);
  },(_ck,_v) => {
    var _co:i2.EmployeeComponent = _v.component;
    const currVal_0:any = _co.employee.firstName;
    _ck(_v,6,0,currVal_0);
    const currVal_1:any = _co.employee.lastName;
    _ck(_v,9,0,currVal_1);
    const currVal_2:any = _co.employee.jobTitle;
    _ck(_v,12,0,currVal_2);
    const currVal_3:any = _co.employee.employeeId;
    _ck(_v,15,0,currVal_3);
  });
}
export function View_EmployeeComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'app-employee',
      ([] as any[]),(null as any),(null as any),(null as any),View_EmployeeComponent_0,
      RenderType_EmployeeComponent)),i0.ɵdid(1,49152,(null as any),0,i2.EmployeeComponent,
      [i3.EmployeeService,i4.Router],(null as any),(null as any))],(null as any),(null as any));
}
export const EmployeeComponentNgFactory:i0.ComponentFactory<i2.EmployeeComponent> = i0.ɵccf('app-employee',
    i2.EmployeeComponent,View_EmployeeComponent_Host_0,{employee:'employee'},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvY3BzdWwvZGVza3RvcC9tZWFuLWFwcC9tZWFuLWFwcC9hc3NldHMvYXBwL2F1dGgvZW1wbG95ZWVzL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy9jcHN1bC9kZXNrdG9wL21lYW4tYXBwL21lYW4tYXBwL2Fzc2V0cy9hcHAvYXV0aC9lbXBsb3llZXMvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovVXNlcnMvY3BzdWwvZGVza3RvcC9tZWFuLWFwcC9tZWFuLWFwcC9hc3NldHMvYXBwL2F1dGgvZW1wbG95ZWVzL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvY3BzdWwvZGVza3RvcC9tZWFuLWFwcC9tZWFuLWFwcC9hc3NldHMvYXBwL2F1dGgvZW1wbG95ZWVzL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC50cy5FbXBsb3llZUNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtaG92ZXJcIj5cclxuICAgIDx0cj5cclxuICAgICAgICA8dGQgY2xhc3M9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICB7eyBlbXBsb3llZS5maXJzdE5hbWUgfX1cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzcz1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgIHt7IGVtcGxveWVlLmxhc3ROYW1lIH19XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQgY2xhc3M9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICB7eyBlbXBsb3llZS5qb2JUaXRsZSB9fVxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAge3sgZW1wbG95ZWUuZW1wbG95ZWVJZCB9fVxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKm5nSWY9XCJyb3V0ZXIudXJsID09PSAnL2VtcGxveWVlcydcIiAoY2xpY2spPVwib25FZGl0KClcIj48c3Ryb25nPkVkaXQ8L3N0cm9uZz48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgKm5nSWY9XCJyb3V0ZXIudXJsID09PSAnL2VtcGxveWVlcydcIiAoY2xpY2spPVwib25EZWxldGUoKVwiPjxzdHJvbmc+RGVsZXRlPC9zdHJvbmc+PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC90ZD5cclxuICAgIDwvdHI+XHJcbjwvdGFibGU+XHJcbiIsIjxhcHAtZW1wbG95ZWU+PC9hcHAtZW1wbG95ZWU+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDZ0JnQjtNQUFBO0lBQUE7SUFBQTtJQUErRDtNQUFBO01BQUE7SUFBQTtJQUEvRDtFQUFBLGdDQUFrRjtNQUFBO01BQUEsZ0JBQVE7OztvQkFDMUY7TUFBQTtJQUFBO0lBQUE7SUFBOEQ7TUFBQTtNQUFBO0lBQUE7SUFBOUQ7RUFBQSxnQ0FBbUY7TUFBQTtNQUFBLGdCQUFROzs7O29CQWpCM0c7TUFBQTtNQUFBLDhCQUErQztNQUMzQztVQUFBO1VBQUE7VUFBQSw0Q0FBSTtVQUFBLGlCQUNBO1VBQUE7VUFBQSxnQkFBcUI7TUFFaEIsa0RBQ0w7VUFBQTtVQUFBLDRDQUFxQjtVQUFBLGtDQUVoQjtNQUNMO1VBQUE7TUFBcUIsbUVBRWhCO1VBQUEsK0JBQ0w7VUFBQTtVQUFBLDhCQUFxQjtVQUFBLGdCQUVoQixrREFDTDtpQkFBQTtjQUFBO01BQXFCLHNEQUNqQjtVQUFBO1VBQUEsOEJBQUs7TUFDRDthQUFBO1VBQUEsaUNBQTJHO01BQzNHO2FBQUE7VUFBQSxpQ0FBOEc7TUFDNUcsb0RBRUw7VUFBQSxhQUNKLDBDQUNEO1VBQUE7O0lBTm1DO0lBQTNCLFlBQTJCLFNBQTNCO0lBQzBCO0lBQTFCLFlBQTBCLFNBQTFCOzs7SUFmYTtJQUFBO0lBR0E7SUFBQTtJQUdBO0lBQUE7SUFHQTtJQUFBOzs7O29CQ1g3QjtNQUFBO2tDQUFBLFVBQUE7TUFBQTs7OyJ9
