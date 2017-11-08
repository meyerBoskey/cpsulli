var Task = /** @class */ (function () {
    function Task(content, dueDate, taskId, employeeId, employeeFirstName, employeeLastName, companyId, adminCanEdit) {
        this.content = content;
        this.dueDate = dueDate;
        this.taskId = taskId;
        this.employeeId = employeeId;
        this.employeeFirstName = employeeFirstName;
        this.employeeLastName = employeeLastName;
        this.companyId = companyId;
        this.adminCanEdit = true;
    }
    return Task;
}());
export { Task };
