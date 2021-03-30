//jshint esversion:6

const express = require('express')
const { default: subjectCtrl } = require('../controllers/subject-ctrl')

const SubjectCtrl = require('../controllers/subject-ctrl')

const router = express.Router()

router.post('/subject', SubjectCtrl.createSuject)
router.put('/subject/:id', SubjectCtrl.updateSubject)
router.delete('/subject/:id', subjectCtrl.deleteSubject)
router.get('/subject/id', SubjectCtrl.getSubjectById)
router.get('/subject', SubjectCtrl.getMovies)

module.exports = router