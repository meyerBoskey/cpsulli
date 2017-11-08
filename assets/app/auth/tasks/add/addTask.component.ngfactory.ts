/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/forms';
import * as i2 from '@angular/common';
import * as i3 from '../../company/sidePanel/sidePanel.component.ngfactory';
import * as i4 from '../../company/sidePanel/sidePanel.component';
import * as i5 from '../../employees/employee.service';
import * as i6 from './addTask.component';
import * as i7 from '../taskList.component.ngfactory';
import * as i8 from '../taskList.component';
const styles_AddTasksComponent:any[] = ([] as any[]);
export const RenderType_AddTasksComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_AddTasksComponent,data:{}});
function View_AddTasksComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),3,'option',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),i0.ɵdid(1,
      147456,(null as any),0,i1.NgSelectOption,[i0.ElementRef,i0.Renderer2,[2,i1.SelectControlValueAccessor]],
      {ngValue:[0,'ngValue']},(null as any)),i0.ɵdid(2,147456,(null as any),0,i1.ɵq,
      [i0.ElementRef,i0.Renderer2,[8,(null as any)]],{ngValue:[0,'ngValue']},(null as any)),
      (_l()(),i0.ɵted(3,(null as any),['\n                          ',' ','\n                        ']))],
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
function View_AddTasksComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),16,'div',[['class',
      'form-group']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n                    '])),(_l()(),i0.ɵeld(2,
          0,(null as any),(null as any),1,'label',[['for','employee']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,
          (null as any),['Employee'])),(_l()(),i0.ɵeld(4,0,(null as any),(null as any),
          0,'br',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n                    '])),
      (_l()(),i0.ɵeld(6,0,(null as any),(null as any),9,'select',[['formControlName',
          'employee']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],
          [2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',
              (null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],
          [[(null as any),'change'],[(null as any),'blur']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('change' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,7).onChange($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,7).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(7,16384,(null as any),0,i1.SelectControlValueAccessor,
          [i0.Renderer2,i0.ElementRef],(null as any),(null as any)),i0.ɵprd(1024,(null as any),
          i1.NG_VALUE_ACCESSOR,(p0_0:any) => {
            return [p0_0];
          },[i1.SelectControlValueAccessor]),i0.ɵdid(9,671744,(null as any),0,i1.FormControlName,
          [[3,i1.ControlContainer],[8,(null as any)],[8,(null as any)],[2,i1.NG_VALUE_ACCESSOR]],
          {name:[0,'name']},(null as any)),i0.ɵprd(2048,(null as any),i1.NgControl,
          (null as any),[i1.FormControlName]),i0.ɵdid(11,16384,(null as any),0,i1.NgControlStatus,
          [i1.NgControl],(null as any),(null as any)),(_l()(),i0.ɵted(-1,(null as any),
          ['\n                        '])),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_AddTasksComponent_2)),i0.ɵdid(14,802816,
          (null as any),0,i2.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,i0.IterableDiffers],
          {ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),
          ['\n                      '])),(_l()(),i0.ɵted(-1,(null as any),['\n                ']))],
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_7:any = 'employee';
        _ck(_v,9,0,currVal_7);
        const currVal_8:any = _co.employees;
        _ck(_v,14,0,currVal_8);
      },(_ck,_v) => {
        const currVal_0:any = i0.ɵnov(_v,11).ngClassUntouched;
        const currVal_1:any = i0.ɵnov(_v,11).ngClassTouched;
        const currVal_2:any = i0.ɵnov(_v,11).ngClassPristine;
        const currVal_3:any = i0.ɵnov(_v,11).ngClassDirty;
        const currVal_4:any = i0.ɵnov(_v,11).ngClassValid;
        const currVal_5:any = i0.ɵnov(_v,11).ngClassInvalid;
        const currVal_6:any = i0.ɵnov(_v,11).ngClassPending;
        _ck(_v,6,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
      });
}
export function View_AddTasksComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),66,'div',[['class',
      'container']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n    '])),(_l()(),i0.ɵeld(2,0,(null as any),
          (null as any),52,'div',[['class','row']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i0.ɵeld(4,0,(null as any),(null as any),4,'div',[['class','col-md-4']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),i0.ɵeld(6,0,(null as any),
          (null as any),1,'app-side-panel',([] as any[]),(null as any),(null as any),
          (null as any),i3.View_SidePanelComponent_0,i3.RenderType_SidePanelComponent)),
      i0.ɵdid(7,114688,(null as any),0,i4.SidePanelComponent,[i5.EmployeeService],
          (null as any),(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),i0.ɵeld(10,0,(null as any),
          (null as any),43,'div',[['class','col-md-8']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),
          ['\n            '])),(_l()(),i0.ɵeld(12,0,(null as any),(null as any),39,
          'form',[['ngNativeValidate','']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',
              (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
              [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
                  (null as any)]],[[(null as any),'ngSubmit'],[(null as any),'submit'],
              [(null as any),'reset']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i6.AddTasksComponent = _v.component;
            if (('submit' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,13).onSubmit($event)) !== false);
              ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,13).onReset()) !== false);
              ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
              const pd_2:any = ((<any>_co.onSubmit(i0.ɵnov(_v,13))) !== false);
              ad = (pd_2 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(13,540672,[['f',4]],0,i1.FormGroupDirective,
          [[8,(null as any)],[8,(null as any)]],{form:[0,'form']},{ngSubmit:'ngSubmit'}),
      i0.ɵprd(2048,(null as any),i1.ControlContainer,(null as any),[i1.FormGroupDirective]),
      i0.ɵdid(15,16384,(null as any),0,i1.NgControlStatusGroup,[i1.ControlContainer],
          (null as any),(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n                '])),
      (_l()(),i0.ɵeld(17,0,(null as any),(null as any),13,'div',[['class','form-group']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n                    '])),(_l()(),i0.ɵeld(19,
          0,(null as any),(null as any),1,'label',[['for','content']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,
          (null as any),['Task'])),(_l()(),i0.ɵted(-1,(null as any),['\n                    '])),
      (_l()(),i0.ɵeld(22,0,(null as any),(null as any),7,'input',[['class','form-control'],
          ['formControlName','content'],['id','content'],['placeholder','Add Task'],
          ['required',''],['type','text']],[[1,'required',0],[2,'ng-untouched',(null as any)],
          [2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',
              (null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],
          [2,'ng-pending',(null as any)]],[[(null as any),'input'],[(null as any),
          'blur'],[(null as any),'compositionstart'],[(null as any),'compositionend']],
          (_v,en,$event) => {
            var ad:boolean = true;
            if (('input' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,23)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,23).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i0.ɵnov(_v,23)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i0.ɵnov(_v,23)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(23,16384,(null as any),0,i1.DefaultValueAccessor,
          [i0.Renderer2,i0.ElementRef,[2,i1.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵdid(24,16384,(null as any),0,i1.RequiredValidator,([] as any[]),
          {required:[0,'required']},(null as any)),i0.ɵprd(1024,(null as any),i1.NG_VALIDATORS,
          (p0_0:any) => {
            return [p0_0];
          },[i1.RequiredValidator]),i0.ɵprd(1024,(null as any),i1.NG_VALUE_ACCESSOR,
          (p0_0:any) => {
            return [p0_0];
          },[i1.DefaultValueAccessor]),i0.ɵdid(27,671744,(null as any),0,i1.FormControlName,
          [[3,i1.ControlContainer],[2,i1.NG_VALIDATORS],[8,(null as any)],[2,i1.NG_VALUE_ACCESSOR]],
          {name:[0,'name'],model:[1,'model']},(null as any)),i0.ɵprd(2048,(null as any),
          i1.NgControl,(null as any),[i1.FormControlName]),i0.ɵdid(29,16384,(null as any),
          0,i1.NgControlStatus,[i1.NgControl],(null as any),(null as any)),(_l()(),
          i0.ɵted(-1,(null as any),['\n                '])),(_l()(),i0.ɵted(-1,(null as any),
          ['\n                '])),(_l()(),i0.ɵeld(32,0,(null as any),(null as any),
          11,'div',[['class','form-group']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n                    '])),
      (_l()(),i0.ɵeld(34,0,(null as any),(null as any),1,'label',[['for','dueDate'],
          ['style','color: #ffffff;']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted(-1,(null as any),['Due Date'])),(_l()(),
          i0.ɵted(-1,(null as any),['\n                    '])),(_l()(),i0.ɵeld(37,
          0,(null as any),(null as any),5,'input',[['class','form-control'],['formControlName',
              'dueDate'],['id','dueDate'],['type','text']],[[2,'ng-untouched',(null as any)],
              [2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',
                  (null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],
              [2,'ng-pending',(null as any)]],[[(null as any),'input'],[(null as any),
              'blur'],[(null as any),'compositionstart'],[(null as any),'compositionend']],
          (_v,en,$event) => {
            var ad:boolean = true;
            if (('input' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,38)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,38).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i0.ɵnov(_v,38)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i0.ɵnov(_v,38)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(38,16384,(null as any),0,i1.DefaultValueAccessor,
          [i0.Renderer2,i0.ElementRef,[2,i1.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵprd(1024,(null as any),i1.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i1.DefaultValueAccessor]),i0.ɵdid(40,671744,(null as any),0,i1.FormControlName,
          [[3,i1.ControlContainer],[8,(null as any)],[8,(null as any)],[2,i1.NG_VALUE_ACCESSOR]],
          {name:[0,'name'],model:[1,'model']},(null as any)),i0.ɵprd(2048,(null as any),
          i1.NgControl,(null as any),[i1.FormControlName]),i0.ɵdid(42,16384,(null as any),
          0,i1.NgControlStatus,[i1.NgControl],(null as any),(null as any)),(_l()(),
          i0.ɵted(-1,(null as any),['\n                '])),(_l()(),i0.ɵted(-1,(null as any),
          ['\n                '])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),
          1,(null as any),View_AddTasksComponent_1)),i0.ɵdid(46,16384,(null as any),
          0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),
      (_l()(),i0.ɵted(-1,(null as any),['\n                '])),(_l()(),i0.ɵted(-1,
          (null as any),['\n                '])),(_l()(),i0.ɵeld(49,0,(null as any),
          (null as any),1,'button',[['class','btn btn-primary '],['type','submit ']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['Save'])),(_l()(),i0.ɵted(-1,(null as any),
          ['\n            '])),(_l()(),i0.ɵted(-1,(null as any),['\n            '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),i0.ɵted(-1,(null as any),
          ['\n    '])),(_l()(),i0.ɵted(-1,(null as any),['\n    '])),(_l()(),i0.ɵeld(56,
          0,(null as any),(null as any),0,'br',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),
          ['\n    '])),(_l()(),i0.ɵeld(58,0,(null as any),(null as any),7,'div',[['class',
          'row']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),i0.ɵeld(60,0,(null as any),
          (null as any),4,'div',[['class','col-md-8 col-md-offset-4']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,
          (null as any),['\n            '])),(_l()(),i0.ɵeld(62,0,(null as any),(null as any),
          1,'app-task-list',([] as any[]),(null as any),(null as any),(null as any),
          i7.View_TaskListComponent_0,i7.RenderType_TaskListComponent)),i0.ɵdid(63,
          114688,(null as any),0,i8.TaskListComponent,[i5.EmployeeService],(null as any),
          (null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n\n        '])),(_l()(),
          i0.ɵted(-1,(null as any),['\n    '])),(_l()(),i0.ɵted(-1,(null as any),['\n'])),
      (_l()(),i0.ɵted(-1,(null as any),['\n']))],(_ck,_v) => {
    var _co:i6.AddTasksComponent = _v.component;
    _ck(_v,7,0);
    const currVal_7:any = _co.form;
    _ck(_v,13,0,currVal_7);
    const currVal_16:any = '';
    _ck(_v,24,0,currVal_16);
    const currVal_17:any = 'content';
    const currVal_18:any = ((_co.task == null)? (null as any): _co.task.content);
    _ck(_v,27,0,currVal_17,currVal_18);
    const currVal_26:any = 'dueDate';
    const currVal_27:any = ((_co.task == null)? (null as any): _co.task.dueDate);
    _ck(_v,40,0,currVal_26,currVal_27);
    const currVal_28:any = _co.isCompany();
    _ck(_v,46,0,currVal_28);
    _ck(_v,63,0);
  },(_ck,_v) => {
    const currVal_0:any = i0.ɵnov(_v,15).ngClassUntouched;
    const currVal_1:any = i0.ɵnov(_v,15).ngClassTouched;
    const currVal_2:any = i0.ɵnov(_v,15).ngClassPristine;
    const currVal_3:any = i0.ɵnov(_v,15).ngClassDirty;
    const currVal_4:any = i0.ɵnov(_v,15).ngClassValid;
    const currVal_5:any = i0.ɵnov(_v,15).ngClassInvalid;
    const currVal_6:any = i0.ɵnov(_v,15).ngClassPending;
    _ck(_v,12,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
    const currVal_8:any = (i0.ɵnov(_v,24).required? '': (null as any));
    const currVal_9:any = i0.ɵnov(_v,29).ngClassUntouched;
    const currVal_10:any = i0.ɵnov(_v,29).ngClassTouched;
    const currVal_11:any = i0.ɵnov(_v,29).ngClassPristine;
    const currVal_12:any = i0.ɵnov(_v,29).ngClassDirty;
    const currVal_13:any = i0.ɵnov(_v,29).ngClassValid;
    const currVal_14:any = i0.ɵnov(_v,29).ngClassInvalid;
    const currVal_15:any = i0.ɵnov(_v,29).ngClassPending;
    _ck(_v,22,0,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13,currVal_14,
        currVal_15);
    const currVal_19:any = i0.ɵnov(_v,42).ngClassUntouched;
    const currVal_20:any = i0.ɵnov(_v,42).ngClassTouched;
    const currVal_21:any = i0.ɵnov(_v,42).ngClassPristine;
    const currVal_22:any = i0.ɵnov(_v,42).ngClassDirty;
    const currVal_23:any = i0.ɵnov(_v,42).ngClassValid;
    const currVal_24:any = i0.ɵnov(_v,42).ngClassInvalid;
    const currVal_25:any = i0.ɵnov(_v,42).ngClassPending;
    _ck(_v,37,0,currVal_19,currVal_20,currVal_21,currVal_22,currVal_23,currVal_24,
        currVal_25);
  });
}
export function View_AddTasksComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'app-add-tasks',
      ([] as any[]),(null as any),(null as any),(null as any),View_AddTasksComponent_0,
      RenderType_AddTasksComponent)),i0.ɵdid(1,114688,(null as any),0,i6.AddTasksComponent,
      [i5.EmployeeService],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const AddTasksComponentNgFactory:i0.ComponentFactory<i6.AddTasksComponent> = i0.ɵccf('app-add-tasks',
    i6.AddTasksComponent,View_AddTasksComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvY3BzdWwvZGVza3RvcC9tZWFuLWFwcC9tZWFuLWFwcC9hc3NldHMvYXBwL2F1dGgvdGFza3MvYWRkL2FkZFRhc2suY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL2Nwc3VsL2Rlc2t0b3AvbWVhbi1hcHAvbWVhbi1hcHAvYXNzZXRzL2FwcC9hdXRoL3Rhc2tzL2FkZC9hZGRUYXNrLmNvbXBvbmVudC50cyIsIm5nOi8vL0M6L1VzZXJzL2Nwc3VsL2Rlc2t0b3AvbWVhbi1hcHAvbWVhbi1hcHAvYXNzZXRzL2FwcC9hdXRoL3Rhc2tzL2FkZC9hZGRUYXNrLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvY3BzdWwvZGVza3RvcC9tZWFuLWFwcC9tZWFuLWFwcC9hc3NldHMvYXBwL2F1dGgvdGFza3MvYWRkL2FkZFRhc2suY29tcG9uZW50LnRzLkFkZFRhc2tzQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICA8YXBwLXNpZGUtcGFuZWw+PC9hcHAtc2lkZS1wYW5lbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KGYpXCIgI2Y9XCJuZ0Zvcm1cIiBuZ05hdGl2ZVZhbGlkYXRlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29udGVudFwiPlRhc2s8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY29udGVudFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZm9ybUNvbnRyb2xOYW1lPVwiY29udGVudFwiIFtuZ01vZGVsXT1cInRhc2s/LmNvbnRlbnRcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIkFkZCBUYXNrXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImR1ZURhdGVcIiBzdHlsZT1cImNvbG9yOiAjZmZmZmZmO1wiPkR1ZSBEYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImR1ZURhdGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGZvcm1Db250cm9sTmFtZT1cImR1ZURhdGVcIiBbbmdNb2RlbF09XCJ0YXNrPy5kdWVEYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgKm5nSWY9XCJpc0NvbXBhbnkoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbXBsb3llZVwiPkVtcGxveWVlPC9sYWJlbD48YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XCJlbXBsb3llZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBlbXBsb3llZSBvZiBlbXBsb3llZXNcIiBbbmdWYWx1ZV09XCJlbXBsb3llZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGVtcGxveWVlLmZpcnN0TmFtZSB9fSB7eyBlbXBsb3llZS5sYXN0TmFtZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8IS0tIDxidXR0b24gY2xhc3M9XCIgYnRuIGJ0bi1kYW5nZXIgXCIgdHlwZT1cImJ1dHRvbiBcIiAoY2xpY2spPVwib25DbGVhcihmKSBcIj5DbGVhcjwvYnV0dG9uPiAtLT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgXCIgdHlwZT1cInN1Ym1pdCBcIj5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPCEtLSA8Zm9ybSBbZm9ybUdyb3VwXT1cImRhdGVcIj5cclxuICAgICAgICAgICAgICAgIDxkYXRlLXBpY2tlciBmb3JtQ29udHJvbE5hbWU9XCJkYXRlXCI+PC9kYXRlLXBpY2tlcj5cclxuICAgICAgICAgICAgPC9mb3JtPiAtLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJyPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTRcIj5cclxuICAgICAgICAgICAgPGFwcC10YXNrLWxpc3Q+PC9hcHAtdGFzay1saXN0PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuIiwiPGFwcC1hZGQtdGFza3M+PC9hcHAtYWRkLXRhc2tzPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNrQndCO01BQUEsK0VBQUE7TUFBQTtNQUFBLDhDQUFBO01BQUE7TUFBZ0U7O1FBQXJCO1FBQTNDLFdBQTJDLFNBQTNDO1FBQTJDO1FBQTNDLFdBQTJDLFNBQTNDOztRQUFnRTtRQUFBO1FBQUE7Ozs7b0JBSHhFO01BQUE7TUFBNEMsOERBQ3hDO1VBQUE7VUFBQSwwREFBc0I7VUFBQSw2QkFBZ0I7VUFBQTtVQUFB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
