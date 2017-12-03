var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Company = require('./company');
var Employee = require('./employees');
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    content: {type: String, required: true},
    dueDate: {type: String, required: true},
    completed: {type: String, required: true},
    employee: {type: Schema.Types.ObjectId},
    employeeFirstName: {type: String},
    employeeLastName: {type: String},
    company: {type: Schema.Types.ObjectId, ref: 'Company'}
});

// schema.post('remove', function(task) {
//     Employee.findById(task.employee, function(err, employee) {
//         employee.tasks.pull(task._id);
//         employee.save();
//     });
//     Company.findById(task.company, function(err, company) {
//         company.tasks.pull(task._id);
//         company.save();
//     });
// });

// schema.post('save', (company) => {
//     company.tasks.add(task._id);
//     company.save();
// });

// schema.post('save', function(task) {
//     console.log(task);
//     Company.findById(task.company, function(err, company) {
//         console.log(company)
//         // company.tasks.add(task._id);
//         // company.save();
//     });
// });

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Task', schema);
