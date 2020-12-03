const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    courses: [{
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'course'
        },
        isApproved: {
            type: Boolean
        }
    }],
    isProfessor: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('user', userSchema)