var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Employee = require('./employees');
var Task = require('./tasks');



var schema = new Schema({
    companyName: {type: String, required: true},
    password: {type: String, required: true},
    adminCode: {type: String, required: true},
    employees: [{type: Schema.Types.ObjectId, ref: 'Employee'}],
    admins: [{type: Schema.Types.ObjectId, ref: 'Employee'}],
    tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}]
    // isAdmin: {type: Boolean, required: true},
});


module.exports = mongoose.model('Company', schema);
