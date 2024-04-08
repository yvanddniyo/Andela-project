const getStudent = "SELECT * FROM students";
const getStudentById = "SELECT * FROM students WHERE id= $1";
const checkEmailExisitng = "SELECT s FROM students s WHERE s.email = $1";
const addStudents = "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const deleteStudents = "DELETE FROM students WHERE id = $1";
const updateStudents = "UPDATE students SET name = $1 WHERE id = $2"

module.exports = {
    getStudent,
    getStudentById,
    checkEmailExisitng,
    addStudents,
    deleteStudents,
    updateStudents

}