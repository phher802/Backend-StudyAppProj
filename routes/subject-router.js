//jshint esversion:6

const express = require('express')
const { default: subjectCtrl } = require('../controllers/subject-ctrl')

const SubjectCtrl = require('../controllers/subject-ctrl')

const router = express.Router()

router.post('/subject', function(req, res){SubjectCtrl.createSuject})
router.put('/subject/:id', SubjectCtrl.updateSubject)
router.delete('/subject/:id', SubjectCtrl.deleteSubject)
router.get('/subject/id', SubjectCtrl.getSubjectById)
router.get('/subject', function(req, res){SubjectCtrl.getMovies})

module.exports = router