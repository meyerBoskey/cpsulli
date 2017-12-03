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
                completed: req.body.completed,
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
        return Employee.findById(req.body.employeeId, function(err, employee) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            if(!employee){
                let err = {message: 'Please select an employee'}
                return res.status(400).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            var task = new Task({
                content: req.body.content,
                dueDate: req.body.dueDate,
                completed: req.body.completed,
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

router.delete('/:id', function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
    console.log(decoded);
    // console.log(req.params.id);
    if(decoded){
        Task.findById(req.params.id, function(err, task) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            if (!task) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: {message: 'Task not found'}
                });
            }
            // let employee = task.employee;
            // let company = task.company;
            Company.findById(task.company, function(err, company) {
                company.tasks.pull(task._id);
                company.save();
            });
            Employee.findById(task.employee, function(err, employee) {
                employee.tasks.pull(task._id);
                employee.save();
            });
            task.remove(function(err, result) {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
                res.status(200).json({
                    message: 'deleted task',
                    obj: result
                });
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


module.exports = router;
