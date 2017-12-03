var Task = /** @class */ (function () {
    function Task(content, dueDate, completed, taskId, employeeId, employeeFirstName, employeeLastName, companyId, adminCanEdit) {
        this.content = content;
        this.dueDate = dueDate;
        this.completed = completed;
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
