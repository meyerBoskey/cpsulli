/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './createCompany.component';
import * as i2 from '@angular/forms';
import * as i3 from '../../employees/employee.service';
const styles_CreateCompanyComponent:any[] = ([] as any[]);
export const RenderType_CreateCompanyComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_CreateCompanyComponent,data:{}});
export function View_CreateCompanyComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),50,'div',[['class',
      'col-md-8 col-md-offset-2']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n    '])),(_l()(),i0.ɵeld(2,
      0,(null as any),(null as any),47,'form',[['novalidate','']],[[2,'ng-untouched',
          (null as any)],[2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],
          [2,'ng-dirty',(null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',
              (null as any)],[2,'ng-pending',(null as any)]],[[(null as any),'ngSubmit'],
          [(null as any),'submit'],[(null as any),'reset']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i1.CreateCompanyComponent = _v.component;
        if (('submit' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,4).onSubmit($event)) !== false);
          ad = (pd_0 && ad);
        }
        if (('reset' === en)) {
          const pd_1:any = ((<any>i0.ɵnov(_v,4).onReset()) !== false);
          ad = (pd_1 && ad);
        }
        if (('ngSubmit' === en)) {
          const pd_2:any = ((<any>_co.onSubmit()) !== false);
          ad = (pd_2 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(3,16384,(null as any),0,i2.ɵbf,([] as any[]),
      (null as any),(null as any)),i0.ɵdid(4,540672,(null as any),0,i2.FormGroupDirective,
      [[8,(null as any)],[8,(null as any)]],{form:[0,'form']},{ngSubmit:'ngSubmit'}),
      i0.ɵprd(2048,(null as any),i2.ControlContainer,(null as any),[i2.FormGroupDirective]),
      i0.ɵdid(6,16384,(null as any),0,i2.NgControlStatusGroup,[i2.ControlContainer],
          (null as any),(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i0.ɵeld(8,0,(null as any),(null as any),11,'div',[['class','form-group']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),i0.ɵeld(10,0,(null as any),
          (null as any),1,'label',[['for','companyName']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),
          ['Company Name'])),(_l()(),i0.ɵted(-1,(null as any),['\n            '])),
      (_l()(),i0.ɵeld(13,0,(null as any),(null as any),5,'input',[['class','form-control'],
          ['formControlName','companyName'],['id','companyName'],['placeholder','Company Name'],
          ['type','text']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],
          [2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',
              (null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],
          [[(null as any),'input'],[(null as any),'blur'],[(null as any),'compositionstart'],
              [(null as any),'compositionend']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('input' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,14)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,14).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i0.ɵnov(_v,14)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i0.ɵnov(_v,14)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(14,16384,(null as any),0,i2.DefaultValueAccessor,
          [i0.Renderer2,i0.ElementRef,[2,i2.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵprd(1024,(null as any),i2.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i2.DefaultValueAccessor]),i0.ɵdid(16,671744,(null as any),0,i2.FormControlName,
          [[3,i2.ControlContainer],[8,(null as any)],[8,(null as any)],[2,i2.NG_VALUE_ACCESSOR]],
          {name:[0,'name']},(null as any)),i0.ɵprd(2048,(null as any),i2.NgControl,
          (null as any),[i2.FormControlName]),i0.ɵdid(18,16384,(null as any),0,i2.NgControlStatus,
          [i2.NgControl],(null as any),(null as any)),(_l()(),i0.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),
          i0.ɵeld(21,0,(null as any),(null as any),11,'div',[['class','form-group']],
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),i0.ɵeld(23,0,(null as any),
          (null as any),1,'label',[['for','password']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),
          ['Password'])),(_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),
          i0.ɵeld(26,0,(null as any),(null as any),5,'input',[['class','form-control'],
              ['formControlName','password'],['id','password'],['placeholder','Password'],
              ['type','password']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',
              (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
              [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
                  (null as any)]],[[(null as any),'input'],[(null as any),'blur'],
              [(null as any),'compositionstart'],[(null as any),'compositionend']],
              (_v,en,$event) => {
                var ad:boolean = true;
                if (('input' === en)) {
                  const pd_0:any = ((<any>i0.ɵnov(_v,27)._handleInput($event.target.value)) !== false);
                  ad = (pd_0 && ad);
                }
                if (('blur' === en)) {
                  const pd_1:any = ((<any>i0.ɵnov(_v,27).onTouched()) !== false);
                  ad = (pd_1 && ad);
                }
                if (('compositionstart' === en)) {
                  const pd_2:any = ((<any>i0.ɵnov(_v,27)._compositionStart()) !== false);
                  ad = (pd_2 && ad);
                }
                if (('compositionend' === en)) {
                  const pd_3:any = ((<any>i0.ɵnov(_v,27)._compositionEnd($event.target.value)) !== false);
                  ad = (pd_3 && ad);
                }
                return ad;
              },(null as any),(null as any))),i0.ɵdid(27,16384,(null as any),0,i2.DefaultValueAccessor,
          [i0.Renderer2,i0.ElementRef,[2,i2.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵprd(1024,(null as any),i2.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i2.DefaultValueAccessor]),i0.ɵdid(29,671744,(null as any),0,i2.FormControlName,
          [[3,i2.ControlContainer],[8,(null as any)],[8,(null as any)],[2,i2.NG_VALUE_ACCESSOR]],
          {name:[0,'name']},(null as any)),i0.ɵprd(2048,(null as any),i2.NgControl,
          (null as any),[i2.FormControlName]),i0.ɵdid(31,16384,(null as any),0,i2.NgControlStatus,
          [i2.NgControl],(null as any),(null as any)),(_l()(),i0.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),
          i0.ɵeld(34,0,(null as any),(null as any),14,'div',[['class','form-group']],
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),i0.ɵeld(36,0,(null as any),
          (null as any),1,'label',[['for','adminCode']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),
          ['Admin Code '])),(_l()(),i0.ɵted(-1,(null as any),['\n            '])),
      (_l()(),i0.ɵeld(39,0,(null as any),(null as any),5,'input',[['class','form-control'],
          ['formControlName','adminCode'],['id','adminCode'],['placeholder','Admin Code'],
          ['type','text']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],
          [2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',
              (null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],
          [[(null as any),'input'],[(null as any),'blur'],[(null as any),'compositionstart'],
              [(null as any),'compositionend']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('input' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,40)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,40).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i0.ɵnov(_v,40)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i0.ɵnov(_v,40)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(40,16384,(null as any),0,i2.DefaultValueAccessor,
          [i0.Renderer2,i0.ElementRef,[2,i2.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵprd(1024,(null as any),i2.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i2.DefaultValueAccessor]),i0.ɵdid(42,671744,(null as any),0,i2.FormControlName,
          [[3,i2.ControlContainer],[8,(null as any)],[8,(null as any)],[2,i2.NG_VALUE_ACCESSOR]],
          {name:[0,'name']},(null as any)),i0.ɵprd(2048,(null as any),i2.NgControl,
          (null as any),[i2.FormControlName]),i0.ɵdid(44,16384,(null as any),0,i2.NgControlStatus,
          [i2.NgControl],(null as any),(null as any)),(_l()(),i0.ɵted(-1,(null as any),
          ['\n            '])),(_l()(),i0.ɵeld(46,0,(null as any),(null as any),1,
          'button',[['class','btn btn-primary'],['type','submit']],[[8,'disabled',
              0]],(null as any),(null as any),(null as any),(null as any))),(_l()(),
          i0.ɵted(-1,(null as any),['Submit'])),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n    '])),(_l()(),i0.ɵted(-1,(null as any),
          ['\n'])),(_l()(),i0.ɵted(-1,(null as any),['\n']))],(_ck,_v) => {
    var _co:i1.CreateCompanyComponent = _v.component;
    const currVal_7:any = _co.myForm;
    _ck(_v,4,0,currVal_7);
    const currVal_15:any = 'companyName';
    _ck(_v,16,0,currVal_15);
    const currVal_23:any = 'password';
    _ck(_v,29,0,currVal_23);
    const currVal_31:any = 'adminCode';
    _ck(_v,42,0,currVal_31);
  },(_ck,_v) => {
    var _co:i1.CreateCompanyComponent = _v.component;
    const currVal_0:any = i0.ɵnov(_v,6).ngClassUntouched;
    const currVal_1:any = i0.ɵnov(_v,6).ngClassTouched;
    const currVal_2:any = i0.ɵnov(_v,6).ngClassPristine;
    const currVal_3:any = i0.ɵnov(_v,6).ngClassDirty;
    const currVal_4:any = i0.ɵnov(_v,6).ngClassValid;
    const currVal_5:any = i0.ɵnov(_v,6).ngClassInvalid;
    const currVal_6:any = i0.ɵnov(_v,6).ngClassPending;
    _ck(_v,2,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
    const currVal_8:any = i0.ɵnov(_v,18).ngClassUntouched;
    const currVal_9:any = i0.ɵnov(_v,18).ngClassTouched;
    const currVal_10:any = i0.ɵnov(_v,18).ngClassPristine;
    const currVal_11:any = i0.ɵnov(_v,18).ngClassDirty;
    const currVal_12:any = i0.ɵnov(_v,18).ngClassValid;
    const currVal_13:any = i0.ɵnov(_v,18).ngClassInvalid;
    const currVal_14:any = i0.ɵnov(_v,18).ngClassPending;
    _ck(_v,13,0,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13,currVal_14);
    const currVal_16:any = i0.ɵnov(_v,31).ngClassUntouched;
    const currVal_17:any = i0.ɵnov(_v,31).ngClassTouched;
    const currVal_18:any = i0.ɵnov(_v,31).ngClassPristine;
    const currVal_19:any = i0.ɵnov(_v,31).ngClassDirty;
    const currVal_20:any = i0.ɵnov(_v,31).ngClassValid;
    const currVal_21:any = i0.ɵnov(_v,31).ngClassInvalid;
    const currVal_22:any = i0.ɵnov(_v,31).ngClassPending;
    _ck(_v,26,0,currVal_16,currVal_17,currVal_18,currVal_19,currVal_20,currVal_21,
        currVal_22);
    const currVal_24:any = i0.ɵnov(_v,44).ngClassUntouched;
    const currVal_25:any = i0.ɵnov(_v,44).ngClassTouched;
    const currVal_26:any = i0.ɵnov(_v,44).ngClassPristine;
    const currVal_27:any = i0.ɵnov(_v,44).ngClassDirty;
    const currVal_28:any = i0.ɵnov(_v,44).ngClassValid;
    const currVal_29:any = i0.ɵnov(_v,44).ngClassInvalid;
    const currVal_30:any = i0.ɵnov(_v,44).ngClassPending;
    _ck(_v,39,0,currVal_24,currVal_25,currVal_26,currVal_27,currVal_28,currVal_29,
        currVal_30);
    const currVal_32:boolean = !_co.myForm.valid;
    _ck(_v,46,0,currVal_32);
  });
}
export function View_CreateCompanyComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'app-create-company',
      ([] as any[]),(null as any),(null as any),(null as any),View_CreateCompanyComponent_0,
      RenderType_CreateCompanyComponent)),i0.ɵdid(1,114688,(null as any),0,i1.CreateCompanyComponent,
      [i3.EmployeeService],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const CreateCompanyComponentNgFactory:i0.ComponentFactory<i1.CreateCompanyComponent> = i0.ɵccf('app-create-company',
    i1.CreateCompanyComponent,View_CreateCompanyComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvY3BzdWwvZGVza3RvcC9tZWFuLWFwcC9tZWFuLWFwcC9hc3NldHMvYXBwL2F1dGgvY29tcGFueS9jcmVhdGUvY3JlYXRlQ29tcGFueS5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMvY3BzdWwvZGVza3RvcC9tZWFuLWFwcC9tZWFuLWFwcC9hc3NldHMvYXBwL2F1dGgvY29tcGFueS9jcmVhdGUvY3JlYXRlQ29tcGFueS5jb21wb25lbnQudHMiLCJuZzovLy9DOi9Vc2Vycy9jcHN1bC9kZXNrdG9wL21lYW4tYXBwL21lYW4tYXBwL2Fzc2V0cy9hcHAvYXV0aC9jb21wYW55L2NyZWF0ZS9jcmVhdGVDb21wYW55LmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvY3BzdWwvZGVza3RvcC9tZWFuLWFwcC9tZWFuLWFwcC9hc3NldHMvYXBwL2F1dGgvY29tcGFueS9jcmVhdGUvY3JlYXRlQ29tcGFueS5jb21wb25lbnQudHMuQ3JlYXRlQ29tcGFueUNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cclxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwibXlGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29tcGFueU5hbWVcIj5Db21wYW55IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImNvbXBhbnlOYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBmb3JtQ29udHJvbE5hbWU9XCJjb21wYW55TmFtZVwiIHBsYWNlaG9sZGVyPVwiQ29tcGFueSBOYW1lXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFkbWluQ29kZVwiPkFkbWluIENvZGUgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhZG1pbkNvZGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGZvcm1Db250cm9sTmFtZT1cImFkbWluQ29kZVwiIHBsYWNlaG9sZGVyPVwiQWRtaW4gQ29kZVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIFtkaXNhYmxlZF09XCIhbXlGb3JtLnZhbGlkXCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbjwvZGl2PlxyXG4iLCI8YXBwLWNyZWF0ZS1jb21wYW55PjwvYXBwLWNyZWF0ZS1jb21wYW55PiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDQUE7TUFBQTtNQUFBLGdCQUFzQyw4Q0FDbEM7TUFBQTtVQUFBO1VBQUE7Y0FBQTtVQUFBO1FBQUE7UUFBQTtRQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBMkI7VUFBQTtVQUFBO1FBQUE7UUFBM0I7TUFBQSx1Q0FBQTtNQUFBLG9DQUFBO01BQUE7YUFBQTthQUFBO1VBQUEsNkJBQW1EO01BQy9DO1VBQUE7TUFBd0Isc0RBQ3BCO1VBQUE7VUFBQSw0Q0FBeUI7VUFBQSxtQkFBb0I7TUFDN0M7VUFBQTtVQUFBO1VBQUE7Y0FBQTtVQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7VUFBQSx1Q0FBQTtVQUFBO1VBQUEsc0JBQUE7UUFBQTtNQUFBLG9DQUFBO1VBQUE7VUFBQSx3Q0FBQTtVQUFBLDJDQUFBO1VBQUEsNENBQWtIO1VBQUEsaUJBQ2hILGtEQUNOO2lCQUFBO2NBQUE7TUFBd0Isc0RBQ3BCO1VBQUE7VUFBQSw0Q0FBc0I7VUFBQSxlQUFnQixzREFDdEM7aUJBQUE7Y0FBQTtjQUFBO2NBQUE7Y0FBQTtrQkFBQTtjQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQUE7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQUE7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQUE7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQSx1Q0FBQTtVQUFBO1VBQUEsc0JBQUE7UUFBQTtNQUFBLG9DQUFBO1VBQUE7VUFBQSx3Q0FBQTtVQUFBLDJDQUFBO1VBQUEsNENBQTRHO1VBQUEsaUJBQzFHLGtEQUNOO2lCQUFBO2NBQUE7TUFBd0Isc0RBQ3BCO1VBQUE7VUFBQSw0Q0FBdUI7VUFBQSxrQkFBbUI7TUFDMUM7VUFBQTtVQUFBO1VBQUE7Y0FBQTtVQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7VUFBQSx1Q0FBQTtVQUFBO1VBQUEsc0JBQUE7UUFBQTtNQUFBLG9DQUFBO1VBQUE7VUFBQSx3Q0FBQTtVQUFBLDJDQUFBO1VBQUEsNENBQTRHO1VBQUEscUJBQzVHO1VBQUE7Y0FBQSw4REFBeUU7aUJBQUEsK0JBQWU7TUFDdEYsOENBQ0g7VUFBQSxTQUNMOztJQWZJO0lBQU4sV0FBTSxTQUFOO0lBR2lFO0lBQXpELFlBQXlELFVBQXpEO0lBSTBEO0lBQTFELFlBQTBELFVBQTFEO0lBSXVEO0lBQXZELFlBQXVELFVBQXZEOzs7SUFYUjtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFdBQUEscUVBQUE7SUFHUTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFlBQUEsMEVBQUE7SUFJQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFlBQUE7UUFBQSxVQUFBO0lBSUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQSxZQUFBO1FBQUEsVUFBQTtJQUM4QztJQUE5QyxZQUE4QyxVQUE5Qzs7OztvQkNiWjtNQUFBO3VDQUFBLFVBQUE7TUFBQTtJQUFBOzs7OyJ9
