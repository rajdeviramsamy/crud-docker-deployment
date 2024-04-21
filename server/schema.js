const mongoose = require('mongoose');
// import mongoose;
// mongoose m = new moongose();
// m.Schema()
const studentSchema = new mongoose.Schema({
    sid: Number,
    sname: String,
    dept: String,
    year: Number,
    cgpa: Number,
});
module.exports.Student = mongoose.model("Student",studentSchema);
