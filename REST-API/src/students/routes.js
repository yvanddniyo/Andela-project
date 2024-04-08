const { Router } = require('express')
const getStudents = require('./controller')
const router = Router();

router.get('/', getStudents.getStudent)
router.post('/', getStudents.addStudents)
router.get('/:id', getStudents.getStudentById)
router.put("/:id", getStudents.updateStudents)
router.delete('/:id', getStudents.deleteStudents)
module.exports = router