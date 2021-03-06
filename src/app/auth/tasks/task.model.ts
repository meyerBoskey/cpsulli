export class Task {
    content: string;
    dueDate: string;
    completed?: string;
    taskId?: string;
    employeeId?: string;
    employeeFirstName?: string;
    employeeLastName?: string;
    companyId?: string;
    adminCanEdit?: Boolean;

    constructor(content: string, dueDate: string, completed?: string, taskId?: string,
        employeeId?: string, employeeFirstName?: string,
        employeeLastName?: string, companyId?: string, adminCanEdit?: Boolean) {

        this.content = content;
        this.dueDate = dueDate;
        this.completed  = completed;
        this.taskId = taskId;
        this.employeeId = employeeId;
        this.employeeFirstName = employeeFirstName;
        this.employeeLastName = employeeLastName;
        this.companyId = companyId;
        this.adminCanEdit = true;
    }
}
