const express = require('express')
const checkUserStatus = require('../middlewares/isProfessor.js')
const controller = require('../controllers/public.controller.js')

const router = express.Router();

// Get all users
router.get('/users', controller.getUsers);
//Get all courses
router.get('/courses', controller.getCourses);
// Get all lessons
router.get('/lessons', controller.getLessons);

// Get courses registered by specific user
router.get('/user/courses/:id', controller.getCoursesByStudentId);

// Assign new course to student
router.post('/user/courses/:id', controller.registerCourseToUser);







module.exports = router