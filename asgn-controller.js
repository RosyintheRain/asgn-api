var Course = require('./asgn-model');

// View all assignments
exports.index = function (req, res) {
    Course.get(function (err, courses) {
        if (err) {
            res.json(err);
        }
        res.json({
            status: "Succss",
            message: "Assignments retrieved!",
            data: contacts
        })
    })
}

// Create
exports.new = function (req, res) {
    var assignment = new Course();
    assignment.courseName = req.body.courseName;
    assignment.assignmentName = req.body.assignmentName;
    assignment.dueDate = req.body.dueDate;

    // Save assignment and check for errors
    assignment.save(function(err) {
        if (err) {
            res.json(err);
        }
        res.json({
            message: "New assignment created",
            data: assignment
        })
    })
}

// View one assignment
exports.view = function (req, res) {
    Course.findById(req.params.course_id, function(err, assignment) {
        if (err) {
            res.json(err);
        }
        res.json({
            message: "Assignment found",
            data: assignment
        })
    })
}

// Update
exports.update = function (req, res) {
    Course.findById(req.params.course_id, function(err, assignment) {
        if (err) {
            res.send(err);
        }

        assignment.courseName = req.body.courseName;
        assignment.assignmentName = req.body.assignmentName;
        assignment.dueDate = req.body.dueDate;

        // Save back to DB
        assignment.save(function(err) {
            if (err) {
                res.json(err);
            }
            res.json({
                message: 'Assignment info updated successfully',
                data: assignment
            })
        })
    })
}

// Delete
exports.delete = function (req, res) {
    Course.remove({
        _id: req.params.course_id
    }, function(err, assignment) {
        if (err) {
            res.json(err);
        }
        res.json({
            status: "Success",
            message: "Assignment deleted"
        })
    })
}