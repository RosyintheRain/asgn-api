var mongoose = require('mongoose');

var classSchema = mongoose.Schema({
    courseName: String,
    assignmentName: {
        type: String,
        required: true
    },
    dueDate: Date
})