var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var jwtTimer = 7200;
var Company = require('../models/company');
var Employee = require('../models/employees');

router.post('/', function (req, res, next) {
    var company = new Company({
        companyName: req.body.companyName,
        password: bcrypt.hashSync(req.body.password, 10),
        adminCode: req.body.adminCode,
        employees: [],
        admins: []
    });
    company.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Company Created',
            obj: result
        });
    });
});

router.post('/signin', function (req, res, next) {
    Company.findOne({companyName: req.body.companyName}, function(err,company) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if(!company) {
            return res.status(401).json({
                title: 'Login Failed',
                error: {message: 'Invalid login credentials'}
            });
        }
        if (!bcrypt.compareSync(req.body.password, company.password)) {
            return res.status(401).json({
                title: 'Login Failed',
                error: {message: 'Invalid login credentials'}
            });
        }
        var token = jwt.sign({company: company}, 'secret', {expiresIn: 7200});
        res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            company: company.companyName,
            isAdmin: true,
            adminCode: company.adminCode
        });
    });
});

router.use('/', function(req, res, next) {
    jwt.verify(req.query.token, 'secret', function(err, decoded) {
        if (err) {
            return res.status(401).json({
                title: 'Not authenticated',
                error: err
            });
        }
        next();
    })
});

router.get('/', (req, res, next) => {
    var decoded = jwt.decode(req.query.token);
    if(decoded) {
        return Employee.find({company: decoded.company})
            .exec(function(err, employees) {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
                res.status(200).json({
                    message: 'Success',
                    obj: employees
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
