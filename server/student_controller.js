const {Student} = require('./schema');

module.exports.insertstd = async (req,res) => {
    console.log(req.body);
    const std = new Student({
        sid: Number(req.body.sid),
        sname: req.body.sname,
        dept: req.body.dept,
        year: Number(req.body.year),
        cgpa: Number(req.body.cgpa),
    });
    const student = await Student.findOne({sid:Number(req.body.sid)});
    if(student)
        return res.send({msg:"student exist in db"});
    const saved_std = await std.save();
    console.log(saved_std)
    res.send(saved_std);
}

module.exports.getall = async (req,res) => {
    const students = await Student.find({});
    if(students.length == 0)
        return res.send({msg:"no students found!"});
    res.send(students);
}

module.exports.getone = async (req,res) => {
    console.log(req.params)
    const student = await Student.findOne({sid:Number(req.params.sid)});
    if(!student)
        return res.send({msg:"student not found!"});
    res.send(student);
}
