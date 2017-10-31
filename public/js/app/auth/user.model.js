var User = /** @class */ (function () {
    function User(email, password, firstName, lastName, isAdmin) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.isAdmin = isAdmin;
    }
    return User;
}());
export { User };
