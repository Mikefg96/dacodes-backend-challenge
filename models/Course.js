const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lessons: [{
        lesson: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'lesson'
        },
        isApproved: {
            type: Boolean
        }
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('course', courseSchema)