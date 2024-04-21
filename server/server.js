const express = require('express');
const app = express();
const cors = require('cors');
const {connectdb} = require('./connect');
const student_controller = require('./student_controller');

// middleware
app.use(cors());
app.use(express.json());

connectdb()
.then(() => console.log("db connected!"))
.catch(err => console.log(err));

app.post('/api/students',student_controller.insertstd);
app.get('/api/students',student_controller.getall);
app.get('/api/students/:sid',student_controller.getone);

const port = 8089;
app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})
