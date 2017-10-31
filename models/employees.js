var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Company = require('./company');
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    jobTitle: {type: String, required: true},
    isAdmin: {type: Boolean, required: true},
    company: {type: Schema.Types.ObjectId, ref: 'Company'},
    tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}]
});

schema.post('remove', function(employee) {
    Company.findById(employee.company, function(err, company) {
        company.employees.pull(employee._id);
        company.admins.pull(employee._id);
        company.save();
    });
});

// schema.post('save', function(task) {
//     console.log('saving task to company');
//     Company.findById(task.company, function(err, company) {
//         company.tasks.add(task._id);
//         company.save();
//     });
// });

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Employee', schema);
