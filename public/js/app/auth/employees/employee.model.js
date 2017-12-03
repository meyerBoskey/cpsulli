var Employee = /** @class */ (function () {
    function Employee(email, password, firstName, lastName, jobTitle, isAdmin, employeeId, tasks) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.isAdmin = isAdmin;
        this.employeeId = employeeId;
        this.tasks = tasks;
    }
    return Employee;
}());
export { Employee };
