const mongoose = require('mongoose')

const lessonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    questions: [{
        type: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        score: {
            type: Number,
            required: true
        },
        answers: [{
            text: String,
            isCorrect: Boolean
        }]
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('lesson', lessonSchema)