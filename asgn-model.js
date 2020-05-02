var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    courseName: String,
    assignmentName: {
        type: String,
        required: true
    },
    dueDate: Date
})

var Course = module.exports = mongoose.model('course', courseSchema);

module.exports.get = function (callback, limit) {
    Course.find(callback).limit(limit);
}