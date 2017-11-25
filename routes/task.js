var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var Employee = require('../models/employees');
var Company = require('../models/company');
var Task = require('../models/tasks');

// router.use('/', function(req, res, next) {
//     jwt.verify(req.query.token, 'secret', function(err, decoded) {
//         if (err) {
//             return res.status(401).json({
//                 title: 'Not authenticated',
//                 error: err
//             });
//         }
//         next();
//     })
// });

router.get('/', (req, res, next) => {
    var decoded = jwt.decode(req.query.token);
    if(decoded.employee) {
        return Task.find({employee: decoded.employee._id})
            .exec(function(err, tasks) {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
                res.status(200).json({
                    message: 'Success',
                    obj: tasks
                });
            });
    } else if(decoded.company) {
        return Task.find({company: decoded.company._id})
            .exec(function(err, tasks) {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
                res.status(200).json({
                    message: 'Success',
                    obj: tasks
                });
            });
    } else {
        return res.status(401).json({
            title: 'Not authenticated',
            error: {
                message: 'Please create an account or sign in'
            }
        });
    }
});

router.post('/', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    if (decoded.employee) {
        Employee.findById(decoded.employee._id, function(err, employee) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            var task = new Task({
                content: req.body.content,
                dueDate: req.body.dueDate,
                employee: employee._id,
                employeeFirstName: employee.firstName,
                employeeLastName: employee.lastName,
                company: employee.company
            });
            task.save((err, result) => {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
                Company.findById(task.company, (err, company) => {
                    if (err) {
                        return res.status(500).json({
                            title: 'An error occurred',
                            error: err
                        });
                    }
                    company.tasks.push(task);
                    company.save();
                });
                employee.tasks.push(task);
                employee.save();
                res.status(201).json({
                    message: 'Task added',
                    obj: result
                });
            });
        });
    } else if (decoded.company) {
        Employee.findById(req.body.employeeId, function(err, employee) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            var task = new Task({
                content: req.body.content,
                dueDate: req.body.dueDate,
                employee: employee._id,
                employeeFirstName: employee.firstName,
                employeeLastName: employee.lastName,
                company: employee.company
            });
            task.save((err, result) => {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
                employee.tasks.push(task);
                employee.save();
                Company.findById(task.company, (err, company) => {
                    if (err) {
                        return res.status(500).json({
                            title: 'An error occurred',
                            error: err
                        });
                    }
                    company.tasks.push(task);
                    company.save();
                });
                res.status(201).json({
                    message: 'Task added',
                    obj: result
                });
            });
        });

    }
});

module.exports = router;
