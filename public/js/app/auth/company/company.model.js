var Company = /** @class */ (function () {
    function Company(companyName, password, adminCode, employees, admins, tasks) {
        this.companyName = companyName;
        this.password = password;
        this.adminCode = adminCode;
        this.employees = employees;
        this.admins = admins;
        this.tasks = tasks;
    }
    return Company;
}());
export { Company };
