const pool = require('../db')
const querries = require('./queries')
const getStudent = (req, res) => {
    pool.query(querries.getStudent, (error, result) => {
        if (error) throw error
        res.status(200).json(result.rows)
    })
}
const getStudentById = (req, res) => {
    const id = req.params.id
    pool.query(querries.getStudentById, [id], (error, result) => {
        if (error) throw error
        res.status(200).json(result.rows)
    })
}

const addStudents = (req, res) => {
    const { name, email, age, dob } = req.body

    pool.query(querries.checkEmailExisitng, [email], (error, result) => {
        if (result.rows.length) {
            res.send("Email already exist")
        }
        else {
            pool.query(querries.addStudents,
                [name, email, age, dob], (error, result) => {
                    if (error) throw error
                    res.status(201).send("Student created successfully.")
                })
        }
    })
}

const deleteStudents = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(querries.getStudentById, [id], (error, result) => {
        const noStudentsFound = !result.rows.length;
        if (noStudentsFound) {
            res.send("No student found.")
        }

        pool.query(querries.deleteStudents, [id], (error, result) => {
            if (error) throw error
            res.status(200).send("Student deleted successfully.")

        })
    })
}

const updateStudents = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    pool.query(querries.getStudentById, [id], (error, result) => {
        const noStudentsFound = !result.rows.length;
        if (noStudentsFound) {
            res.send("No student found.");
        } else {
            pool.query(querries.updateStudents, [name, id], (error, result) => {
                if (error) throw error;
                res.status(200).send("Student updated successfully.");
            });
        }
    });
};

module.exports = {
    getStudent,
    getStudentById,
    addStudents,
    deleteStudents,
    updateStudents
}