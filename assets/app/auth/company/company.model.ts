
export class Company {
    constructor(
        public companyName: string,
        public password: string,
        public adminCode: string,
        public employees?: string,
        public admins?: string,
        public tasks?: string
    ){}
}
