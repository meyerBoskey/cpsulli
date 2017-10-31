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
const styles_EmployeeComponent:any[] = ['.author[_ngcontent-%COMP%] {\n        display: inline-block;\n        font-style: italic;\n        font-size: 12px;\n        width: 100%;\n    }\n    .config[_ngcontent-%COMP%] {\n        display: inline-block;\n        text-align: right;\n        font-size: 12px;\n        width: 40%;\n    }'];
export const RenderType_EmployeeComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:0,
    styles:styles_EmployeeComponent,data:{}});
function View_EmployeeComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'a',([] as any[]),
      (null as any),[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.onEdit()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵeld(0,(null as any),(null as any),
      1,'strong',([] as any[]),(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['Edit']))],(null as any),(null as any));
}
function View_EmployeeComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'a',([] as any[]),
      (null as any),[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.onDelete()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵeld(0,(null as any),(null as any),
      1,'strong',([] as any[]),(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['Delete']))],(null as any),(null as any));
}
export function View_EmployeeComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),22,'article',[['class',
      'panel panel-default']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),1,'div',[['class','panel-body']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n        ',
      ' ','\n    '])),(_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),16,'footer',[['class','panel-footer']],(null as any),
      (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
      ['\n        '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'div',[['class',
      'author']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n            ','\n        '])),(_l()(),i0.ɵted((null as any),
          ['\n        '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),10,'div',
          [['class','author']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['\n            employee ID: ',
          '\n            '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),7,'div',
          [['class','config']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_EmployeeComponent_1)),
      i0.ɵdid(16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n                '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_EmployeeComponent_2)),
      i0.ɵdid(16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵted((null as any),['\n\n        '])),(_l()(),i0.ɵted((null as any),
          ['\n    '])),(_l()(),i0.ɵted((null as any),['\n'])),(_l()(),i0.ɵted((null as any),
          ['\n']))],(_ck,_v) => {
    var _co:i2.EmployeeComponent = _v.component;
    const currVal_4:any = (_co.router.url === '/employees');
    _ck(_v,15,0,currVal_4);
    const currVal_5:any = (_co.router.url === '/employees');
    _ck(_v,18,0,currVal_5);
  },(_ck,_v) => {
    var _co:i2.EmployeeComponent = _v.component;
    const currVal_0:any = _co.employee.firstName;
    const currVal_1:any = _co.employee.lastName;
    _ck(_v,3,0,currVal_0,currVal_1);
    const currVal_2:any = _co.employee.jobTitle;
    _ck(_v,8,0,currVal_2);
    const currVal_3:any = _co.employee.employeeId;
    _ck(_v,11,0,currVal_3);
  });
}
export function View_EmployeeComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'app-employee',
      ([] as any[]),(null as any),(null as any),(null as any),View_EmployeeComponent_0,
      RenderType_EmployeeComponent)),i0.ɵdid(49152,(null as any),0,i2.EmployeeComponent,
      [i3.EmployeeService,i4.Router],(null as any),(null as any))],(null as any),(null as any));
}
export const EmployeeComponentNgFactory:i0.ComponentFactory<i2.EmployeeComponent> = i0.ɵccf('app-employee',
    i2.EmployeeComponent,View_EmployeeComponent_Host_0,{employee:'employee'},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvY3BzdWwvZGVza3RvcC9tZWFuLWFwcC9tZWFuLWFwcC9hc3NldHMvYXBwL2F1dGgvZW1wbG95ZWVzL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy9jcHN1bC9kZXNrdG9wL21lYW4tYXBwL21lYW4tYXBwL2Fzc2V0cy9hcHAvYXV0aC9lbXBsb3llZXMvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovVXNlcnMvY3BzdWwvZGVza3RvcC9tZWFuLWFwcC9tZWFuLWFwcC9hc3NldHMvYXBwL2F1dGgvZW1wbG95ZWVzL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvY3BzdWwvZGVza3RvcC9tZWFuLWFwcC9tZWFuLWFwcC9hc3NldHMvYXBwL2F1dGgvZW1wbG95ZWVzL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC50cy5FbXBsb3llZUNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxhcnRpY2xlIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICB7eyBlbXBsb3llZS5maXJzdE5hbWUgfX0ge3sgZW1wbG95ZWUubGFzdE5hbWUgfX1cclxuICAgIDwvZGl2PlxyXG4gICAgPGZvb3RlciBjbGFzcz1cInBhbmVsLWZvb3RlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhdXRob3JcIj5cclxuICAgICAgICAgICAge3sgZW1wbG95ZWUuam9iVGl0bGUgfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aG9yXCI+XHJcbiAgICAgICAgICAgIGVtcGxveWVlIElEOiB7eyBlbXBsb3llZS5lbXBsb3llZUlkIH19XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb25maWdcIj5cclxuICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwicm91dGVyLnVybCA9PT0gJy9lbXBsb3llZXMnXCIgKGNsaWNrKT1cIm9uRWRpdCgpXCI+PHN0cm9uZz5FZGl0PC9zdHJvbmc+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJyb3V0ZXIudXJsID09PSAnL2VtcGxveWVlcydcIiAoY2xpY2spPVwib25EZWxldGUoKVwiPjxzdHJvbmc+RGVsZXRlPC9zdHJvbmc+PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvb3Rlcj5cclxuPC9hcnRpY2xlPlxyXG4iLCI8YXBwLWVtcGxveWVlPjwvYXBwLWVtcGxveWVlPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ1dnQjtNQUFBO1FBQUE7UUFBQTtRQUF1QztVQUFBO1VBQUE7UUFBQTtRQUF2QztNQUFBLGdDQUEwRDtNQUFBO01BQUEsZ0JBQVE7OztvQkFDbEU7TUFBQTtRQUFBO1FBQUE7UUFBdUM7VUFBQTtVQUFBO1FBQUE7UUFBdkM7TUFBQSxnQ0FBNEQ7TUFBQTtNQUFBLGdCQUFROzs7b0JBWnBGO01BQUE7TUFBQSxnQkFBcUMsMkNBQ2pDO01BQUE7TUFBQSw0Q0FBd0I7TUFBQSxnQkFFbEIsMkNBQ047TUFBQTtNQUFBLDBEQUE2QjtNQUFBLGlCQUN6QjtNQUFBO01BQW9CLGdFQUVkO1VBQUEsaUJBQ047VUFBQTtVQUFBLGdCQUFvQjtVQUFBLG9CQUVoQjtVQUFBO1VBQUEsZ0JBQW9CLHVEQUNoQjtpQkFBQTthQUFBO1VBQUEsd0JBQW1GO01BQ25GO2FBQUE7VUFBQSx3QkFBdUY7TUFDckYsaURBRUo7VUFBQSxhQUNELHVDQUNIO1VBQUE7O0lBTlM7SUFBSCxZQUFHLFNBQUg7SUFDRztJQUFILFlBQUcsU0FBSDs7O0lBWFk7SUFBQTtJQUFBO0lBSUE7SUFBQTtJQUdBO0lBQUE7Ozs7b0JDUjVCO01BQUE7a0NBQUEsVUFBQTtNQUFBOzs7In0=
