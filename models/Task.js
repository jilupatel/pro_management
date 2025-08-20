const mongoose = require(mongoose);

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    project_id: {
        id: mongoose.ProjectSchema.id
    },
    due_date: {
        type: Date,
        require: true
    },
    description: {
        type: String,
        default: ""
    },
    created_at: {
        type: Date,
    },
    updated_at: {
        type: Date,
    }
}, {
    timeStamp: true
});

module.exports = mongoose.model('Task', TaskSchema);