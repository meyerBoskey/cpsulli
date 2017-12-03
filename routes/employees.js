var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var Employee = require('../models/employees');
var Company = require('../models/company');

router.post('/signin', function (req, res, next) {
    Employee.findOne({email: req.body.email}, function(err, employee) {
        console.log(employee);
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if(!employee) {
            return res.status(401).json({
                title: 'Login Failed',
                error: {message: 'Invalid login credentials'}
            });
        }
        if (!bcrypt.compareSync(req.body.password, employee.password)) {
            return res.status(401).json({
                title: 'Login Failed',
                error: {message: 'Invalid login credentials'}
            });
        }
        var token = jwt.sign({employee: employee}, 'secret', {expiresIn: 7200});
        res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            employeeId: employee._id,
            isAdmin: employee.isAdmin,
            firstName: employee.firstName
            // adminCode: company.adminCode
        });
    });
});

router.post('/', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Company.findById(decoded.company._id, function(err, company) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        var employee = new Employee({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            jobTitle: req.body.jobTitle,
            isAdmin: req.body.isAdmin,
            company: company._id
        });
        employee.save((err, result) => {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            company.employees.push(employee);
            company.save();
            if (req.body.isAdmin == true) {
                company.admins.push(employee);
            }
            res.status(201).json({
                message: 'Employee added',
                obj: result
            });
        });
    });
});

router.delete('/:id', function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
    // console.log(decoded);
    Employee.findById(req.params.id, function(err, employee) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!employee) {
            return res.status(500).json({
                title: 'An error occurred',
                error: {message: 'Message not found'}
            });
        }
        if (employee.company != decoded.company._id) {
            return res.status(401).json({
                title: 'Not authenticated',
                error: {message: 'Users do not match'}
            });
        }
    employee.remove(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'deleted employee',
                obj: result
            });
        });
    });
});

router.patch('/:id', function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Employee.findById(req.params.id, function(err, employee) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!employee) {
            return res.status(500).json({
                title: 'An error occurred',
                error: {message: 'Message not found'}
            });
        }
        if (employee.company != decoded.company._id) {
            return res.status(401).json({
                title: 'Not authenticated',
                error: {message: 'Users do not match'}
            });
        }
        // console.log(employee);
        employee.firstName = req.body.firstName;
        employee.lastName = req.body.lastName;
        employee.email = req.body.email;
        employee.password = req.body.password;
        employee.jobTitle = req.body.jobTitle;
        employee.isAdmin = req.body.isAdmin;
        console.log(employee);

        employee.save(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated message',
                obj: result
            });
        });
    });
});

module.exports = router;
