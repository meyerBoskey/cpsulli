export class Employee {
    constructor(
        public email: string,
        public password: string,
        public firstName?: string,
        public lastName?: string,
        public jobTitle?: string,
        public isAdmin?: Boolean,
        public employeeId?: string,
        public tasks?: string[]
    ) {}
}
