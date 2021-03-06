/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './addTask.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/forms';
import * as i3 from '@angular/common';
import * as i4 from './addTask.component';
import * as i5 from '../taskList.component.ngfactory';
import * as i6 from '../taskList.component';
import * as i7 from '../../employees/employee.service';
import * as i8 from '@angular/router';
import * as i9 from '../../employees/error2/error2.component.ngfactory';
import * as i10 from '../../employees/error2/error2.component';
import * as i11 from '../../employees/error2/error2.service';
const styles_AddTasksComponent:any[] = [i0.styles];
export const RenderType_AddTasksComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_AddTasksComponent,data:{}});
function View_AddTasksComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),3,'option',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),i1.ɵdid(1,
      147456,(null as any),0,i2.NgSelectOption,[i1.ElementRef,i1.Renderer2,[2,i2.SelectControlValueAccessor]],
      {ngValue:[0,'ngValue']},(null as any)),i1.ɵdid(2,147456,(null as any),0,i2.ɵq,
      [i1.ElementRef,i1.Renderer2,[8,(null as any)]],{ngValue:[0,'ngValue']},(null as any)),
      (_l()(),i1.ɵted(3,(null as any),['\n                          ',' ','\n                        ']))],
      (_ck,_v) => {
        const currVal_0:any = _v.context.$implicit;
        _ck(_v,1,0,currVal_0);
        const currVal_1:any = _v.context.$implicit;
        _ck(_v,2,0,currVal_1);
      },(_ck,_v) => {
        const currVal_2:any = _v.context.$implicit.firstName;
        const currVal_3:any = _v.context.$implicit.lastName;
        _ck(_v,3,0,currVal_2,currVal_3);
      });
}
function View_AddTasksComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),16,'div',[['class',
      'form-group']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n                    '])),(_l()(),i1.ɵeld(2,
          0,(null as any),(null as any),1,'label',[['for','employee']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['Employee'])),(_l()(),i1.ɵeld(4,0,(null as any),(null as any),
          0,'br',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n                    '])),
      (_l()(),i1.ɵeld(6,0,(null as any),(null as any),9,'select',[['formControlName',
          'employee']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],
          [2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',
              (null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],
          [[(null as any),'change'],[(null as any),'blur']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('change' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,7).onChange($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,7).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(7,16384,(null as any),0,i2.SelectControlValueAccessor,
          [i1.Renderer2,i1.ElementRef],(null as any),(null as any)),i1.ɵprd(1024,(null as any),
          i2.NG_VALUE_ACCESSOR,(p0_0:any) => {
            return [p0_0];
          },[i2.SelectControlValueAccessor]),i1.ɵdid(9,671744,(null as any),0,i2.FormControlName,
          [[3,i2.ControlContainer],[8,(null as any)],[8,(null as any)],[2,i2.NG_VALUE_ACCESSOR]],
          {name:[0,'name']},(null as any)),i1.ɵprd(2048,(null as any),i2.NgControl,
          (null as any),[i2.FormControlName]),i1.ɵdid(11,16384,(null as any),0,i2.NgControlStatus,
          [i2.NgControl],(null as any),(null as any)),(_l()(),i1.ɵted(-1,(null as any),
          ['\n                        '])),(_l()(),i1.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_AddTasksComponent_2)),i1.ɵdid(14,802816,
          (null as any),0,i3.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,i1.IterableDiffers],
          {ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),
          ['\n                      '])),(_l()(),i1.ɵted(-1,(null as any),['\n                ']))],
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_7:any = 'employee';
        _ck(_v,9,0,currVal_7);
        const currVal_8:any = _co.employees;
        _ck(_v,14,0,currVal_8);
      },(_ck,_v) => {
        const currVal_0:any = i1.ɵnov(_v,11).ngClassUntouched;
        const currVal_1:any = i1.ɵnov(_v,11).ngClassTouched;
        const currVal_2:any = i1.ɵnov(_v,11).ngClassPristine;
        const currVal_3:any = i1.ɵnov(_v,11).ngClassDirty;
        const currVal_4:any = i1.ɵnov(_v,11).ngClassValid;
        const currVal_5:any = i1.ɵnov(_v,11).ngClassInvalid;
        const currVal_6:any = i1.ɵnov(_v,11).ngClassPending;
        _ck(_v,6,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
      });
}
function View_AddTasksComponent_3(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'div',[['class',
      'alert alert-success'],['data-dismiss','alert'],['id','successMessage']],(null as any),
      (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(1,
      (null as any),['','']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.successMessage;
    _ck(_v,1,0,currVal_0);
  });
}
export function View_AddTasksComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),63,'div',[['class',
      'container-fluid']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵeld(2,
      0,(null as any),(null as any),49,'div',[['class','row']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
      ['\n        '])),(_l()(),i1.ɵeld(4,0,(null as any),(null as any),46,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted(-1,(null as any),['\n            '])),(_l()(),i1.ɵeld(6,0,(null as any),
      (null as any),42,'form',[['ngNativeValidate','']],[[2,'ng-untouched',(null as any)],
          [2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',
              (null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],
          [2,'ng-pending',(null as any)]],[[(null as any),'ngSubmit'],[(null as any),
          'submit'],[(null as any),'reset']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i4.AddTasksComponent = _v.component;
        if (('submit' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,7).onSubmit($event)) !== false);
          ad = (pd_0 && ad);
        }
        if (('reset' === en)) {
          const pd_1:any = ((<any>i1.ɵnov(_v,7).onReset()) !== false);
          ad = (pd_1 && ad);
        }
        if (('ngSubmit' === en)) {
          const pd_2:any = ((<any>_co.onSubmit(i1.ɵnov(_v,7))) !== false);
          ad = (pd_2 && ad);
        }
        return ad;
      },(null as any),(null as any))),i1.ɵdid(7,540672,[['f',4]],0,i2.FormGroupDirective,
      [[8,(null as any)],[8,(null as any)]],{form:[0,'form']},{ngSubmit:'ngSubmit'}),
      i1.ɵprd(2048,(null as any),i2.ControlContainer,(null as any),[i2.FormGroupDirective]),
      i1.ɵdid(9,16384,(null as any),0,i2.NgControlStatusGroup,[i2.ControlContainer],
          (null as any),(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n                '])),
      (_l()(),i1.ɵeld(11,0,(null as any),(null as any),13,'div',[['class','form-group']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n                    '])),(_l()(),i1.ɵeld(13,
          0,(null as any),(null as any),1,'label',[['for','content']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['Task'])),(_l()(),i1.ɵted(-1,(null as any),['\n                    '])),
      (_l()(),i1.ɵeld(16,0,(null as any),(null as any),7,'input',[['class','form-control'],
          ['formControlName','content'],['id','content'],['placeholder','Add Task'],
          ['required',''],['type','text']],[[1,'required',0],[2,'ng-untouched',(null as any)],
          [2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',
              (null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],
          [2,'ng-pending',(null as any)]],[[(null as any),'input'],[(null as any),
          'blur'],[(null as any),'compositionstart'],[(null as any),'compositionend']],
          (_v,en,$event) => {
            var ad:boolean = true;
            if (('input' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,17)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,17).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i1.ɵnov(_v,17)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i1.ɵnov(_v,17)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(17,16384,(null as any),0,i2.DefaultValueAccessor,
          [i1.Renderer2,i1.ElementRef,[2,i2.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i1.ɵdid(18,16384,(null as any),0,i2.RequiredValidator,([] as any[]),
          {required:[0,'required']},(null as any)),i1.ɵprd(1024,(null as any),i2.NG_VALIDATORS,
          (p0_0:any) => {
            return [p0_0];
          },[i2.RequiredValidator]),i1.ɵprd(1024,(null as any),i2.NG_VALUE_ACCESSOR,
          (p0_0:any) => {
            return [p0_0];
          },[i2.DefaultValueAccessor]),i1.ɵdid(21,671744,(null as any),0,i2.FormControlName,
          [[3,i2.ControlContainer],[2,i2.NG_VALIDATORS],[8,(null as any)],[2,i2.NG_VALUE_ACCESSOR]],
          {name:[0,'name'],model:[1,'model']},(null as any)),i1.ɵprd(2048,(null as any),
          i2.NgControl,(null as any),[i2.FormControlName]),i1.ɵdid(23,16384,(null as any),
          0,i2.NgControlStatus,[i2.NgControl],(null as any),(null as any)),(_l()(),
          i1.ɵted(-1,(null as any),['\n                '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n                '])),(_l()(),i1.ɵeld(26,0,(null as any),(null as any),
          11,'div',[['class','form-group']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n                    '])),
      (_l()(),i1.ɵeld(28,0,(null as any),(null as any),1,'label',[['for','dueDate']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['Due Date'])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n                    '])),(_l()(),i1.ɵeld(31,0,(null as any),(null as any),
          5,'input',[['class','form-control'],['formControlName','dueDate'],['id',
              'dueDate'],['type','text']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',
              (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
              [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
                  (null as any)]],[[(null as any),'input'],[(null as any),'blur'],
              [(null as any),'compositionstart'],[(null as any),'compositionend']],
          (_v,en,$event) => {
            var ad:boolean = true;
            if (('input' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,32)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,32).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i1.ɵnov(_v,32)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i1.ɵnov(_v,32)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(32,16384,(null as any),0,i2.DefaultValueAccessor,
          [i1.Renderer2,i1.ElementRef,[2,i2.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i1.ɵprd(1024,(null as any),i2.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i2.DefaultValueAccessor]),i1.ɵdid(34,671744,(null as any),0,i2.FormControlName,
          [[3,i2.ControlContainer],[8,(null as any)],[8,(null as any)],[2,i2.NG_VALUE_ACCESSOR]],
          {name:[0,'name'],model:[1,'model']},(null as any)),i1.ɵprd(2048,(null as any),
          i2.NgControl,(null as any),[i2.FormControlName]),i1.ɵdid(36,16384,(null as any),
          0,i2.NgControlStatus,[i2.NgControl],(null as any),(null as any)),(_l()(),
          i1.ɵted(-1,(null as any),['\n                '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n                '])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),
          1,(null as any),View_AddTasksComponent_1)),i1.ɵdid(40,16384,(null as any),
          0,i3.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),
      (_l()(),i1.ɵted(-1,(null as any),['\n                '])),(_l()(),i1.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_AddTasksComponent_3)),i1.ɵdid(43,
          16384,(null as any),0,i3.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,
              'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n\n                '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n                '])),(_l()(),i1.ɵeld(46,
          0,(null as any),(null as any),1,'button',[['class','btn btn-primary'],['type',
              'submit']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['Save'])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n            '])),(_l()(),i1.ɵted(-1,(null as any),['\n            '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n        '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n    '])),(_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵeld(53,
          0,(null as any),(null as any),0,'br',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          ['\n    '])),(_l()(),i1.ɵeld(55,0,(null as any),(null as any),7,'div',[['class',
          'row']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n        '])),(_l()(),i1.ɵeld(57,0,(null as any),
          (null as any),4,'div',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n            '])),
      (_l()(),i1.ɵeld(59,0,(null as any),(null as any),1,'app-task-list',([] as any[]),
          (null as any),(null as any),(null as any),i5.View_TaskListComponent_0,i5.RenderType_TaskListComponent)),
      i1.ɵdid(60,114688,(null as any),0,i6.TaskListComponent,[i7.EmployeeService,i8.Router],
          (null as any),(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n\n        '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n'])),(_l()(),i1.ɵted(-1,(null as any),['\n'])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n'])),(_l()(),i1.ɵeld(66,0,(null as any),(null as any),1,'app-error2',
          ([] as any[]),(null as any),(null as any),(null as any),i9.View_Error2Component_0,
          i9.RenderType_Error2Component)),i1.ɵdid(67,114688,(null as any),0,i10.Error2Component,
          [i11.Error2Service],(null as any),(null as any)),(_l()(),i1.ɵted(-1,(null as any),
          ['\n']))],(_ck,_v) => {
    var _co:i4.AddTasksComponent = _v.component;
    const currVal_7:any = _co.form;
    _ck(_v,7,0,currVal_7);
    const currVal_16:any = '';
    _ck(_v,18,0,currVal_16);
    const currVal_17:any = 'content';
    const currVal_18:any = ((_co.task == null)? (null as any): _co.task.content);
    _ck(_v,21,0,currVal_17,currVal_18);
    const currVal_26:any = 'dueDate';
    const currVal_27:any = ((_co.task == null)? (null as any): _co.task.dueDate);
    _ck(_v,34,0,currVal_26,currVal_27);
    const currVal_28:any = _co.isCompany();
    _ck(_v,40,0,currVal_28);
    const currVal_29:any = _co.successMessage;
    _ck(_v,43,0,currVal_29);
    _ck(_v,60,0);
    _ck(_v,67,0);
  },(_ck,_v) => {
    const currVal_0:any = i1.ɵnov(_v,9).ngClassUntouched;
    const currVal_1:any = i1.ɵnov(_v,9).ngClassTouched;
    const currVal_2:any = i1.ɵnov(_v,9).ngClassPristine;
    const currVal_3:any = i1.ɵnov(_v,9).ngClassDirty;
    const currVal_4:any = i1.ɵnov(_v,9).ngClassValid;
    const currVal_5:any = i1.ɵnov(_v,9).ngClassInvalid;
    const currVal_6:any = i1.ɵnov(_v,9).ngClassPending;
    _ck(_v,6,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
    const currVal_8:any = (i1.ɵnov(_v,18).required? '': (null as any));
    const currVal_9:any = i1.ɵnov(_v,23).ngClassUntouched;
    const currVal_10:any = i1.ɵnov(_v,23).ngClassTouched;
    const currVal_11:any = i1.ɵnov(_v,23).ngClassPristine;
    const currVal_12:any = i1.ɵnov(_v,23).ngClassDirty;
    const currVal_13:any = i1.ɵnov(_v,23).ngClassValid;
    const currVal_14:any = i1.ɵnov(_v,23).ngClassInvalid;
    const currVal_15:any = i1.ɵnov(_v,23).ngClassPending;
    _ck(_v,16,0,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13,currVal_14,
        currVal_15);
    const currVal_19:any = i1.ɵnov(_v,36).ngClassUntouched;
    const currVal_20:any = i1.ɵnov(_v,36).ngClassTouched;
    const currVal_21:any = i1.ɵnov(_v,36).ngClassPristine;
    const currVal_22:any = i1.ɵnov(_v,36).ngClassDirty;
    const currVal_23:any = i1.ɵnov(_v,36).ngClassValid;
    const currVal_24:any = i1.ɵnov(_v,36).ngClassInvalid;
    const currVal_25:any = i1.ɵnov(_v,36).ngClassPending;
    _ck(_v,31,0,currVal_19,currVal_20,currVal_21,currVal_22,currVal_23,currVal_24,
        currVal_25);
  });
}
export function View_AddTasksComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'app-add-tasks',
      ([] as any[]),(null as any),(null as any),(null as any),View_AddTasksComponent_0,
      RenderType_AddTasksComponent)),i1.ɵdid(1,114688,(null as any),0,i4.AddTasksComponent,
      [i7.EmployeeService],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const AddTasksComponentNgFactory:i1.ComponentFactory<i4.AddTasksComponent> = i1.ɵccf('app-add-tasks',
    i4.AddTasksComponent,View_AddTasksComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvY3BzdWwvZGVza3RvcC9tZWFuLWFwcC9tZWFuLWFwcC9hc3NldHMvYXBwL2F1dGgvdGFza3MvYWRkL2FkZFRhc2suY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL2Nwc3VsL2Rlc2t0b3AvbWVhbi1hcHAvbWVhbi1hcHAvYXNzZXRzL2FwcC9hdXRoL3Rhc2tzL2FkZC9hZGRUYXNrLmNvbXBvbmVudC50cyIsIm5nOi8vL0M6L1VzZXJzL2Nwc3VsL2Rlc2t0b3AvbWVhbi1hcHAvbWVhbi1hcHAvYXNzZXRzL2FwcC9hdXRoL3Rhc2tzL2FkZC9hZGRUYXNrLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvY3BzdWwvZGVza3RvcC9tZWFuLWFwcC9tZWFuLWFwcC9hc3NldHMvYXBwL2F1dGgvdGFza3MvYWRkL2FkZFRhc2suY29tcG9uZW50LnRzLkFkZFRhc2tzQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdChmKVwiICNmPVwibmdGb3JtXCIgbmdOYXRpdmVWYWxpZGF0ZT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbnRlbnRcIj5UYXNrPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImNvbnRlbnRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGZvcm1Db250cm9sTmFtZT1cImNvbnRlbnRcIiBbbmdNb2RlbF09XCJ0YXNrPy5jb250ZW50XCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJBZGQgVGFza1wiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkdWVEYXRlXCI+RHVlIERhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZHVlRGF0ZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZm9ybUNvbnRyb2xOYW1lPVwiZHVlRGF0ZVwiIFtuZ01vZGVsXT1cInRhc2s/LmR1ZURhdGVcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiAqbmdJZj1cImlzQ29tcGFueSgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtcGxveWVlXCI+RW1wbG95ZWU8L2xhYmVsPjxicj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGZvcm1Db250cm9sTmFtZT1cImVtcGxveWVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGVtcGxveWVlIG9mIGVtcGxveWVlc1wiIFtuZ1ZhbHVlXT1cImVtcGxveWVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZW1wbG95ZWUuZmlyc3ROYW1lIH19IHt7IGVtcGxveWVlLmxhc3ROYW1lIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJzdWNjZXNzTWVzc2FnZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgaWQ9XCJzdWNjZXNzTWVzc2FnZVwiPnt7c3VjY2Vzc01lc3NhZ2V9fTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gPGJ1dHRvbiBjbGFzcz1cIiBidG4gYnRuLWRhbmdlciBcIiB0eXBlPVwiYnV0dG9uIFwiIChjbGljayk9XCJvbkNsZWFyKGYpIFwiPkNsZWFyPC9idXR0b24+IC0tPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPCEtLSA8Zm9ybSBbZm9ybUdyb3VwXT1cImRhdGVcIj5cclxuICAgICAgICAgICAgICAgIDxkYXRlLXBpY2tlciBmb3JtQ29udHJvbE5hbWU9XCJkYXRlXCI+PC9kYXRlLXBpY2tlcj5cclxuICAgICAgICAgICAgPC9mb3JtPiAtLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJyPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxhcHAtdGFzay1saXN0PjwvYXBwLXRhc2stbGlzdD5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwhLS0gPHNjcmlwdD5cclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VjY2Vzc01lc3NhZ2VcIikuZmFkZVRvKDUwMCwgMCkuc2xpZGVVcCg1MDAsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIDUwMDApO1xyXG48L3NjcmlwdD5cclxuPHNjcmlwdCBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy4yLjEuanNcIiBpbnRlZ3JpdHk9XCJzaGEyNTYtRFpBbktKLzZYWjlzaTA0SGdyc3h1LzhzNzE3amNJekx5M29pMzVFb3V5RT1cIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PiAtLT5cclxuPGFwcC1lcnJvcjI+PC9hcHAtZXJyb3IyPlxyXG4iLCI8YXBwLWFkZC10YXNrcz48L2FwcC1hZGQtdGFza3M+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ2V3QjtNQUFBLCtFQUFBO01BQUE7TUFBQSw4Q0FBQTtNQUFBO01BQWdFOztRQUFyQjtRQUEzQyxXQUEyQyxTQUEzQztRQUEyQztRQUEzQyxXQUEyQyxTQUEzQzs7UUFBZ0U7UUFBQTtRQUFBOzs7O29CQUh4RTtNQUFBO01BQTRDLDhEQUN4QztVQUFBO1VBQUEsMERBQXNCO1VBQUEsNkJBQWdCO1VBQUE7VUFBQSxnQkFBSTtNQUMxQztVQUFBO1VBQUE7Y0FBQTtVQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7VUFBQSx1Q0FBQTtVQUFBLGlFQUFBOytCQUFBO1lBQUE7VUFBQSwwQ0FBQTtVQUFBO1VBQUEsd0NBQUE7VUFBQSwyQ0FBQTtVQUFBLDRDQUFtQztVQUFBLGlDQUMvQjtVQUFBLGdFQUFBO1VBQUE7VUFBQSx1Q0FFUztVQUFBLCtCQUNGOzs7UUFKSDtRQUFSLFdBQVEsU0FBUjtRQUNZO1FBQVIsWUFBUSxTQUFSOztRQURKO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUEsV0FBQSxxRUFBQTs7OztvQkFNSjtNQUFBO01BQUEsMERBQWlHO01BQUE7O0lBQUE7SUFBQTs7OztvQkFwQmpIO01BQUE7TUFBQSxnQkFBNkIsOENBQ3pCO01BQUE7TUFBQSw0Q0FBaUI7TUFBQSxpQkFDYjtNQUFBLHdFQUFLO2FBQUEsdUNBQ0Q7TUFBQTtVQUFBO2NBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtRQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBeUI7VUFBQTtVQUFBO1FBQUE7UUFBekI7TUFBQSx1Q0FBQTtNQUFBO2FBQUE7YUFBQTtVQUFBLDZCQUErRTtNQUMzRTtVQUFBO01BQXdCLDhEQUNwQjtVQUFBO1VBQUEsMERBQXFCO1VBQUEseUJBQVk7TUFDakM7VUFBQTtVQUFBO1VBQUE7Y0FBQTtVQUFBO1VBQUE7VUFBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtVQUFBLHVDQUFBO1VBQUE7VUFBQSxzQkFBQTtVQUFBLGdEQUFBO1VBQUE7WUFBQTtVQUFBO1VBQUE7WUFBQTtVQUFBLG9DQUFBO1VBQUE7VUFBQSwwREFBQTt1QkFBQSwyQ0FBQTtVQUFBLGlFQUF5STtpQkFBQSwyQ0FDdkk7VUFBQSx5QkFDTjtVQUFBO1VBQUEsOEJBQXdCO01BQ3BCO1VBQUE7TUFBcUIsZ0RBQWdCO1VBQUEsNkJBQ3JDO1VBQUE7Y0FBQTtjQUFBO2NBQUE7a0JBQUE7Y0FBQTtVQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO1VBQUEsdUNBQUE7VUFBQTtVQUFBLHNCQUFBO1FBQUE7TUFBQSxvQ0FBQTtVQUFBO1VBQUEsMERBQUE7dUJBQUEsMkNBQUE7VUFBQSxpRUFBeUc7aUJBQUEsMkNBQ3ZHO1VBQUEseUJBQ047VUFBQSxrREFBQTtVQUFBO01BT00sMERBQ047VUFBQSw4RUFBQTtVQUFBO2NBQUEsd0JBQXlIO01BRTVCLDBEQUM3RjtVQUFBO2NBQUE7TUFBOEMsNENBQWE7VUFBQSxxQkFDeEQ7TUFHSSxrREFDVDtVQUFBLGFBQ0osOENBQ047VUFBQTtVQUFBLDRDQUFJO1VBQUEsYUFDSjtVQUFBO01BQWlCLGtEQUNiO1VBQUE7VUFBQSw4QkFBSztNQUNEO1VBQUE7YUFBQTtVQUFBLDZCQUErQjtNQUU3Qiw4Q0FDSjtVQUFBLFNBQ0osMENBUXFKO1VBQUEsU0FDM0o7VUFBQTt1Q0FBQSxVQUFBO1VBQUEsaURBQXlCO1VBQUE7O0lBM0NQO0lBQU4sV0FBTSxTQUFOO0lBR2lIO0lBQXpHLFlBQXlHLFVBQXpHO0lBQXFEO0lBQTBCO0lBQS9FLFlBQXFELFdBQTBCLFVBQS9FO0lBSXFEO0lBQTBCO0lBQS9FLFlBQXFELFdBQTBCLFVBQS9FO0lBRW9CO0lBQXhCLFlBQXdCLFVBQXhCO0lBUUs7SUFBTCxZQUFLLFVBQUw7SUFhSjtJQWFaOztJQTNDWTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFdBQUEscUVBQUE7SUFHUTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUEsWUFBQSxVQUFBO1FBQUEsVUFBQTtJQUlBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUEsWUFBQTtRQUFBLFVBQUE7Ozs7b0JDVnBCO01BQUE7a0NBQUEsVUFBQTtNQUFBO0lBQUE7Ozs7In0=
