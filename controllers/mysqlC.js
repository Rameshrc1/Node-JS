const Joi = require('@hapi/joi');
const db = require("../config/database");
const Student = require("../model/student");

exports.findAll=async (req,res)=>{
   try {
       //select student.name , student.city , student.mobile from student where student.name = "wimala"
       const data= await Student.findAll({attributes: ['name', 'city', 'mobile'], where:{name:'wimala'}});
       return res.status(200).json({data});

   }catch (error){
       console.log(error)
   }
}


exports.validate=(req,res,next)=>{
    try {
        const schema = Joi.object({
            name: Joi.string().required(),

        });
        const { error } = schema.validate(req.query);
        if (error && error.details) {
            return res.status(200).json({
                message: error.details[0].message
            });
        } else {
            next();
        }

    }catch (error){
        res.status(200).json({message:"validation error"});
        console.log(error);

    }
}

exports.getAll=(req,res)=>{
    try {
        const option = `SELECT * FROM student where student.name like '%${req.query.name}%'`;
        db.query(`${option}`, {
            bind: [],
            type: db.QueryTypes.SELECT,
        }).then(result=>{
            return res.status(200).json({
                 result
            });
        }).catch(error=>{
            console.log(error);
            return res.status(502).json({
                message: "db error"
            });
        })

    }catch (error){
        console.log(error);
    }
}