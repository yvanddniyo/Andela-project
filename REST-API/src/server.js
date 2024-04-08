const express = require('express')
const app = express()
const studentsRouter = require('./students/routes')
const port = 5000

app.use(express.json())


app.use('/api/v1/students', studentsRouter)
app.listen(port, () => console.log(`app is listening port of ${port}`))