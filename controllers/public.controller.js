const User = require('../models/User')
const Course = require('../models/Course')
const Lesson = require('../models/Lesson')

exports.getUsers = (req, res) => {
    User.find((err, users) => {
        if(err) res.status(500).json({ success: false, msg: err })

        res.status(200).json({
            success: true,
            data: users
        })
    }) 
}

// COURSE CRUD

exports.createCourse = (req, res) => {

    const newCourse = new Course({
        name: req.body.course_name
    })

    newCourse.save((err, savedDoc) => {
        if(err) res.status(500).json({ success: false, msg: err })   

        res.status(200).json({
            success: true,
            data: savedDoc
        })
    })
}

exports.getCourses = (req, res) => {
    Course.find((err, courses) => {
        if(err) res.status(500).json({ success: false, msg: err })

        res.status(200).json({
            success: true,
            data: courses
        })
    }) 
}

exports.updateCourse = (req, res) => {
    const course_id = req.params.id
    const newData = {
        name: req.body.course_name
    }

    Course.findByIdAndUpdate(course_id, { $set: { newData } },(err, updatedCourse) => {
        if(err) res.status(500).json({ success: false, msg: err })

        res.status(200).json({
            success: true,
            data: updatedCourse
        })
    })
}

exports.deleteCourse = (req, res) => {
    const course_id = req.params.id

    Course.findByIdAndDelete(course_id, (err, cb) => {
        if(err) res.status(500).json({ success: false, msg: err })   

        res.status(200).json({
            success: true,
            data: cb
        })
    })
}

// COURSE CRUD END


exports.getLessons = (req, res) => {
    Lesson.find((err, lessons) => {
        if(err) res.status(500).json({ success: false, msg: err })

        res.status(200).json({
            success: true,
            data: lessons
        })
    }) 
}

exports.getCoursesByStudentId = (req, res) => {
    const student_id = req.params.id
    
    User.findById(student_id).populate('courses.course').exec((err, populatedUser) => {
        if(err) res.status(500).json({ success: false, msg: err })

        res.status(200).json({
            success: true,
            data: populatedUser
        })
    })
}

exports.registerCourseToUser = (req, res)=> {
    const user_id = req.body.user_id
    const course_id = req.body.course_id

    const course =  {
        course: course_id,
        isApproved: false
    }

    User.findByIdAndUpdate( user_id, { $push: { courses: course } }, (err, updatedUser) => {
        if(err) res.status(500).json({ success: false, msg: err })

        res.status(200).json({
            success: true,
            data: updatedUser
        })
    })
}