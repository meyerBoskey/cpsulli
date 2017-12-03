/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from './taskFilter.pipe';
import * as i3 from './taskList.component';
import * as i4 from '@angular/forms';
import * as i5 from '../employees/employee.service';
import * as i6 from '@angular/router';
const styles_TaskListComponent:any[] = ([] as any[]);
export const RenderType_TaskListComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_TaskListComponent,data:{}});
function View_TaskListComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),2,'a',[['class',
      'btn btn-danger']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.modalOpen((<any>_v.parent).context.$implicit)) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),(_l()(),i0.ɵeld(1,0,(null as any),(null as any),
      1,'strong',([] as any[]),(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted(-1,(null as any),['Delete']))],(null as any),
      (null as any));
}
function View_TaskListComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),23,'tr',[['id',
      'collection-item']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n                    '])),
      (_l()(),i0.ɵeld(2,0,(null as any),(null as any),1,'td',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(3,
          (null as any),['',''])),(_l()(),i0.ɵted(-1,(null as any),['\n                    '])),
      (_l()(),i0.ɵeld(5,0,(null as any),(null as any),1,'td',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(6,
          (null as any),['',''])),(_l()(),i0.ɵted(-1,(null as any),['\n                    '])),
      (_l()(),i0.ɵeld(8,0,(null as any),(null as any),1,'td',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(9,
          (null as any),['',''])),(_l()(),i0.ɵted(-1,(null as any),['\n                    '])),
      (_l()(),i0.ɵeld(11,0,(null as any),(null as any),1,'td',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(12,
          (null as any),['',''])),(_l()(),i0.ɵted(-1,(null as any),['\n                    '])),
      (_l()(),i0.ɵeld(14,0,(null as any),(null as any),1,'td',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(15,
          (null as any),['',''])),(_l()(),i0.ɵted(-1,(null as any),['\n                    '])),
      (_l()(),i0.ɵeld(17,0,(null as any),(null as any),5,'td',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,
          (null as any),['\n                        '])),(_l()(),i0.ɵted(-1,(null as any),
          ['\n                        '])),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_TaskListComponent_2)),i0.ɵdid(21,16384,
          (null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n                    '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n                ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_5:any = _co.isCompany();
    _ck(_v,21,0,currVal_5);
  },(_ck,_v) => {
    const currVal_0:any = _v.context.$implicit.employeeFirstName;
    _ck(_v,3,0,currVal_0);
    const currVal_1:any = _v.context.$implicit.employeeLastName;
    _ck(_v,6,0,currVal_1);
    const currVal_2:any = _v.context.$implicit.dueDate;
    _ck(_v,9,0,currVal_2);
    const currVal_3:any = _v.context.$implicit.content;
    _ck(_v,12,0,currVal_3);
    const currVal_4:any = _v.context.$implicit.completed;
    _ck(_v,15,0,currVal_4);
  });
}
export function View_TaskListComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[i0.ɵpid(0,i2.FilterTasksArrayPipe,([] as any[])),(_l()(),i0.ɵted(-1,
      (null as any),['\n'])),(_l()(),i0.ɵeld(2,0,(null as any),(null as any),54,'div',
      [['class','panel panel-default']],(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n    '])),
      (_l()(),i0.ɵeld(4,0,(null as any),(null as any),4,'div',[['class','panel-heading main-color-bg']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),i0.ɵeld(6,0,(null as any),
          (null as any),1,'h3',[['class','panel-title']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),
          ['Tasks'])),(_l()(),i0.ɵted(-1,(null as any),['\n    '])),(_l()(),i0.ɵted(-1,
          (null as any),['\n    '])),(_l()(),i0.ɵeld(10,0,(null as any),(null as any),
          45,'div',[['class','panel-body']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i0.ɵeld(12,0,(null as any),(null as any),11,'div',[['class','row']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),i0.ɵeld(14,0,(null as any),
          (null as any),8,'div',[['class','col-md-12']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),
          ['\n                '])),(_l()(),i0.ɵeld(16,0,(null as any),(null as any),
          5,'input',[['class','form-control'],['id','filterInput'],['placeholder',
              'Filter by name or due date.'],['type','text']],[[2,'ng-untouched',(null as any)],
              [2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',
                  (null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],
              [2,'ng-pending',(null as any)]],[[(null as any),'ngModelChange'],[(null as any),
              'input'],[(null as any),'blur'],[(null as any),'compositionstart'],[(null as any),
              'compositionend']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i3.TaskListComponent = _v.component;
            if (('input' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,17)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,17).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i0.ɵnov(_v,17)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i0.ɵnov(_v,17)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
              const pd_4:any = ((<any>(_co.searchText = $event)) !== false);
              ad = (pd_4 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(17,16384,(null as any),0,i4.DefaultValueAccessor,
          [i0.Renderer2,i0.ElementRef,[2,i4.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵprd(1024,(null as any),i4.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i4.DefaultValueAccessor]),i0.ɵdid(19,671744,(null as any),0,i4.NgModel,[[8,
          (null as any)],[8,(null as any)],[8,(null as any)],[2,i4.NG_VALUE_ACCESSOR]],
          {model:[0,'model']},{update:'ngModelChange'}),i0.ɵprd(2048,(null as any),
          i4.NgControl,(null as any),[i4.NgModel]),i0.ɵdid(21,16384,(null as any),
          0,i4.NgControlStatus,[i4.NgControl],(null as any),(null as any)),(_l()(),
          i0.ɵted(-1,(null as any),['\n            '])),(_l()(),i0.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),
          i0.ɵeld(25,0,(null as any),(null as any),0,'br',([] as any[]),(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,
          (null as any),['\n        '])),(_l()(),i0.ɵeld(27,0,(null as any),(null as any),
          27,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),
          i0.ɵeld(29,0,(null as any),(null as any),24,'table',[['class','table table-striped table-hover'],
              ['id','tasks']],(null as any),(null as any),(null as any),(null as any),
              (null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n                '])),
      (_l()(),i0.ɵeld(31,0,(null as any),(null as any),22,'tbody',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵeld(32,
          0,(null as any),(null as any),16,'tr',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),
          ['\n                    '])),(_l()(),i0.ɵeld(34,0,(null as any),(null as any),
          1,'th',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted(-1,(null as any),['First Name'])),(_l()(),
          i0.ɵted(-1,(null as any),['\n                    '])),(_l()(),i0.ɵeld(37,
          0,(null as any),(null as any),1,'th',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),
          ['Last Name'])),(_l()(),i0.ɵted(-1,(null as any),['\n                    '])),
      (_l()(),i0.ɵeld(40,0,(null as any),(null as any),1,'th',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,
          (null as any),['Date Due'])),(_l()(),i0.ɵted(-1,(null as any),['\n                    '])),
      (_l()(),i0.ɵeld(43,0,(null as any),(null as any),1,'th',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,
          (null as any),['Task'])),(_l()(),i0.ɵted(-1,(null as any),['\n                    '])),
      (_l()(),i0.ɵeld(46,0,(null as any),(null as any),1,'th',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,
          (null as any),['Completion'])),(_l()(),i0.ɵted(-1,(null as any),['\n                '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n                '])),(_l()(),i0.ɵand(16777216,
          (null as any),(null as any),2,(null as any),View_TaskListComponent_1)),i0.ɵdid(51,
          802816,(null as any),0,i1.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,i0.IterableDiffers],
          {ngForOf:[0,'ngForOf']},(null as any)),i0.ɵppd(52,2),(_l()(),i0.ɵted(-1,
          (null as any),['\n            '])),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n    '])),(_l()(),i0.ɵted(-1,(null as any),
          ['\n'])),(_l()(),i0.ɵted(-1,(null as any),['\n\n'])),(_l()(),i0.ɵeld(58,
          0,(null as any),(null as any),2,'div',[['class','backdrop']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),i0.ɵdid(59,278528,
          (null as any),0,i1.NgStyle,[i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],
          {ngStyle:[0,'ngStyle']},(null as any)),i0.ɵpod(60,{'display':0}),(_l()(),
          i0.ɵted(-1,(null as any),['\n'])),(_l()(),i0.ɵeld(62,0,(null as any),(null as any),
          36,'div',[['class','modal'],['role','dialog'],['tabindex','-1']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),i0.ɵdid(63,278528,
          (null as any),0,i1.NgStyle,[i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],
          {ngStyle:[0,'ngStyle']},(null as any)),i0.ɵpod(64,{'display':0}),(_l()(),
          i0.ɵted(-1,(null as any),['\n    '])),(_l()(),i0.ɵeld(66,0,(null as any),
          (null as any),30,'div',[['class','modal-dialog'],['role','document']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,
          (null as any),['\n        '])),(_l()(),i0.ɵeld(68,0,(null as any),(null as any),
          26,'div',[['class','modal-content']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n            '])),
      (_l()(),i0.ɵeld(70,0,(null as any),(null as any),8,'div',[['class','modal-header']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n                '])),(_l()(),i0.ɵeld(72,
          0,(null as any),(null as any),2,'button',[['aria-label','Close'],['class',
              'close'],['type','button']],(null as any),[[(null as any),'click']],
          (_v,en,$event) => {
            var ad:boolean = true;
            var _co:i3.TaskListComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.onCancel()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵeld(73,0,(null as any),(null as any),
          1,'span',[['aria-hidden','true']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['×'])),(_l()(),
          i0.ɵted(-1,(null as any),['\n                '])),(_l()(),i0.ɵeld(76,0,(null as any),
          (null as any),1,'h4',[['class','modal-title']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),
          ['Remove Task'])),(_l()(),i0.ɵted(-1,(null as any),['\n            '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),i0.ɵeld(80,0,(null as any),
          (null as any),4,'div',[['class','modal-body']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),
          ['\n                '])),(_l()(),i0.ɵeld(82,0,(null as any),(null as any),
          1,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted(-1,(null as any),['Are you sure you want to remove task?'])),
      (_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),i0.ɵted(-1,(null as any),
          ['\n            '])),(_l()(),i0.ɵeld(86,0,(null as any),(null as any),7,
          'div',[['class','modal-footer']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n                '])),
      (_l()(),i0.ɵeld(88,0,(null as any),(null as any),1,'button',[['class','btn btn-default'],
          ['type','button']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i3.TaskListComponent = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.onDelete()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['Remove Task'])),
      (_l()(),i0.ɵted(-1,(null as any),['\n                '])),(_l()(),i0.ɵeld(91,
          0,(null as any),(null as any),1,'button',[['class','btn btn-default'],['type',
              'button']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i3.TaskListComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.onCancel()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['Cancel'])),
      (_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),i0.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),
          i0.ɵted(-1,(null as any),['\n    '])),(_l()(),i0.ɵted(-1,(null as any),['\n    '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n'])),(_l()(),i0.ɵted(-1,(null as any),['\n'])),
      (_l()(),i0.ɵted(-1,(null as any),['\n']))],(_ck,_v) => {
    var _co:i3.TaskListComponent = _v.component;
    const currVal_7:any = _co.searchText;
    _ck(_v,19,0,currVal_7);
    const currVal_8:any = i0.ɵunv(_v,51,0,_ck(_v,52,0,i0.ɵnov(_v,0),_co.tasks,_co.searchText));
    _ck(_v,51,0,currVal_8);
    const currVal_9:any = _ck(_v,60,0,_co.display);
    _ck(_v,59,0,currVal_9);
    const currVal_10:any = _ck(_v,64,0,_co.display);
    _ck(_v,63,0,currVal_10);
  },(_ck,_v) => {
    const currVal_0:any = i0.ɵnov(_v,21).ngClassUntouched;
    const currVal_1:any = i0.ɵnov(_v,21).ngClassTouched;
    const currVal_2:any = i0.ɵnov(_v,21).ngClassPristine;
    const currVal_3:any = i0.ɵnov(_v,21).ngClassDirty;
    const currVal_4:any = i0.ɵnov(_v,21).ngClassValid;
    const currVal_5:any = i0.ɵnov(_v,21).ngClassInvalid;
    const currVal_6:any = i0.ɵnov(_v,21).ngClassPending;
    _ck(_v,16,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
  });
}
export function View_TaskListComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'app-task-list',
      ([] as any[]),(null as any),(null as any),(null as any),View_TaskListComponent_0,
      RenderType_TaskListComponent)),i0.ɵdid(1,114688,(null as any),0,i3.TaskListComponent,
      [i5.EmployeeService,i6.Router],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const TaskListComponentNgFactory:i0.ComponentFactory<i3.TaskListComponent> = i0.ɵccf('app-task-list',
    i3.TaskListComponent,View_TaskListComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvY3BzdWwvZGVza3RvcC9tZWFuLWFwcC9tZWFuLWFwcC9hc3NldHMvYXBwL2F1dGgvdGFza3MvdGFza0xpc3QuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL2Nwc3VsL2Rlc2t0b3AvbWVhbi1hcHAvbWVhbi1hcHAvYXNzZXRzL2FwcC9hdXRoL3Rhc2tzL3Rhc2tMaXN0LmNvbXBvbmVudC50cyIsIm5nOi8vL0M6L1VzZXJzL2Nwc3VsL2Rlc2t0b3AvbWVhbi1hcHAvbWVhbi1hcHAvYXNzZXRzL2FwcC9hdXRoL3Rhc2tzL3Rhc2tMaXN0LmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvY3BzdWwvZGVza3RvcC9tZWFuLWFwcC9tZWFuLWFwcC9hc3NldHMvYXBwL2F1dGgvdGFza3MvdGFza0xpc3QuY29tcG9uZW50LnRzLlRhc2tMaXN0Q29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPCEtLSA8ZGl2PlxyXG4gICAgPGFwcC10YXNrIFt0YXNrXT1cInRhc2tcIiAqbmdGb3I9XCJsZXQgdGFzayBvZiB0YXNrc1wiPjwvYXBwLXRhc2s+XHJcbjwvZGl2PiAtLT5cclxuPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nIG1haW4tY29sb3ItYmdcIj5cclxuICAgICAgICA8aDMgY2xhc3M9XCJwYW5lbC10aXRsZVwiPlRhc2tzPC9oMz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRmlsdGVyIGJ5IG5hbWUgb3IgZHVlIGRhdGUuXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImZpbHRlcklucHV0XCIgWyhuZ01vZGVsKV09XCJzZWFyY2hUZXh0XCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxicj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCIgaWQ9XCJ0YXNrc1wiPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5GaXJzdCBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+TGFzdCBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+RGF0ZSBEdWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5UYXNrPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+Q29tcGxldGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCB0YXNrIG9mIHRhc2tzIHwgZmlsdGVyVGFza3M6IHNlYXJjaFRleHRcIiBpZD1cImNvbGxlY3Rpb24taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e3Rhc2suZW1wbG95ZWVGaXJzdE5hbWV9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7dGFzay5lbXBsb3llZUxhc3ROYW1lfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e3Rhc2suZHVlRGF0ZX19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3t0YXNrLmNvbnRlbnR9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7dGFzay5jb21wbGV0ZWR9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxhIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKm5nSWY9XCJyb3V0ZXIudXJsID09PSAnL2VtcGxveWVlcydcIiAoY2xpY2spPVwib25FZGl0KClcIj48c3Ryb25nPkVkaXQ8L3N0cm9uZz48L2E+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgKm5nSWY9XCJpc0NvbXBhbnkoKVwiIChjbGljayk9XCJtb2RhbE9wZW4odGFzaylcIj48c3Ryb25nPkRlbGV0ZTwvc3Ryb25nPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJiYWNrZHJvcFwiIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6IGRpc3BsYXl9XCI+PC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJtb2RhbFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JzogZGlzcGxheX1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgKGNsaWNrKT1cIm9uQ2FuY2VsKClcIj48c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5SZW1vdmUgVGFzazwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHA+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0YXNrPzwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cIm9uRGVsZXRlKClcIj5SZW1vdmUgVGFzazwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiAoY2xpY2spPVwib25DYW5jZWwoKVwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tIC8ubW9kYWwtY29udGVudCAtLT5cclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLSAvLm1vZGFsLWRpYWxvZyAtLT5cclxuPC9kaXY+XHJcbjwhLS0gLy5tb2RhbCAtLT5cclxuIiwiPGFwcC10YXNrLWxpc3Q+PC9hcHAtdGFzay1saXN0PiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDK0J3QjtNQUFBO0lBQUE7SUFBQTtJQUE4QztNQUFBO01BQUE7SUFBQTtJQUE5QztFQUFBLGdDQUF3RTtNQUFBO01BQUEsZ0JBQVE7Ozs7b0JBUnhGO01BQUE7TUFBQSxnQkFBOEU7TUFDMUU7VUFBQSwwREFBSTtVQUFBLHdCQUErQjtNQUNuQztVQUFBLDBEQUFJO1VBQUEsd0JBQThCO01BQ2xDO1VBQUEsMERBQUk7VUFBQSx3QkFBcUI7TUFDekI7VUFBQSwwREFBSTtVQUFBLHdCQUFxQjtNQUN6QjtVQUFBLDBEQUFJO1VBQUEsd0JB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
