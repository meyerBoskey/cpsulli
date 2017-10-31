import { RouterModule } from '@angular/router';
import { AddEmployeeComponent } from "./add/addEmployee.component";
import { TasksComponent } from "../tasks/tasks.component";
var EMPLOYEES_ROUTES = [
    { path: '', redirectTo: 'employees', pathMatch: 'full' },
    { path: 'add', component: AddEmployeeComponent },
    { path: 'tasks', component: TasksComponent },
];
export var employeesRouting = RouterModule.forChild(EMPLOYEES_ROUTES);
