const express = require('express');
const router = express.Router();

const StudentController = require('../controllers/StudentController')
const WorkController = require("../controllers/WorksController");
const AuthVerifyMiddleWare = require("../middleware/AuthVerifyMiddleWare");
//create student

router.post('/addStudent', StudentController.createStudent);
//login student
router.post('/loginStudent', StudentController.loginStudent);
//update student
router.post('/updateStudent/:id', StudentController.updateStudent);
//delete student
router.get('/deleteStudent/:id', StudentController.deleteStudent);

//create work
router.post('/createWork',AuthVerifyMiddleWare,WorkController.createWork);
//read work
router.get('/readWork',AuthVerifyMiddleWare,WorkController.readWork);
//update work
router.post('/updateWork/:id',AuthVerifyMiddleWare,WorkController.updateWork);
//delete work
router.get('/deleteWork/:id',AuthVerifyMiddleWare,WorkController.deleteWork);








module.exports = router;