const mongoose = require('mongoose')
const dotenv = require('dotenv')

const User = require('./models/User')
const Course = require('./models/Course')
const Lesson = require('./models/Lesson')

const mockUsers = require('./data/user.data')
const mockCourses = require('./data/course.data')
const mockLessons = require('./data/lesson.data')

const connectDB = require('./config/db')
const users = require('./data/user.data')

dotenv.config()
connectDB()

const importData = async() => {
    try {
        await User.deleteMany()
        await Course.deleteMany()
        await Lesson.deleteMany()

        await User.insertMany(mockUsers)
        await Course.insertMany(mockCourses)
        await Lesson.insertMany(mockLessons)

        console.log('Data import successful')
        process.exit()
    } catch(e) {

        console.error(e)
        proccess.exit(1);
    }
}

const relateData = async() => {
    try {
        const users = await User.find()
        const courses =  await Course.find()
        const lessons = await Lesson.find()

        const firstLesson = {
            lesson: lessons[0]._id,
            isApproved: false
        }

        const secondLesson = {
            lesson: lessons[1]._id,
            isApproved: false
        }

        const firstCourse = {
            course: courses[0]._id,
            isApproved: false
        }

        const secondCourse = {
            course: courses[1]._id,
            isApproved: false
        }

        await Course.findByIdAndUpdate( courses[0]._id, { $push: { lessons: firstLesson } })
        await Course.findByIdAndUpdate( courses[1]._id, { $push: { lessons: secondLesson } })

        await User.findByIdAndUpdate( users[0]._id, { $push: { courses: firstCourse } })
        await User.findByIdAndUpdate( users[1]._id, { $push: { courses: secondCourse } })

        console.log('Data relation successful')
        process.exit()
    } catch(e) {

        console.error(e)
        proccess.exit(1);
    }
}

const destroyData = async() => {
    try {
        await User.deleteMany()
        await Course.deleteMany()
        await Lesson.deleteMany()

        console.log('Data destroyed!')
        process.exit()
    } catch(e) {

        console.error(e)
        proccess.exit(1);
    }
}

if(process.argv[2] == '-d') {
    destroyData()
} else if(process.argv[2] == '-r') {
    relateData()
} else {
    importData()
}

