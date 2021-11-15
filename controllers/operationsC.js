const Joi = require('@hapi/joi');



exports.validate=(req,res,next)=>{
    try {
        const schema = Joi.object({
            number1: Joi.number().required(),
            number2: Joi.number().required(),

        });
        const { error } = schema.validate(req.body);
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

exports.add=(req,res)=>{
    try{
        const number1=req.body.number1;
        const number2=req.body.number2;
        return res.status(200).json({
            add:number1+number2
        });
    }catch (error){
        console.log(error);

    }
}

exports.sub=(req,res)=>{
    try {
        const number1=req.body.number1;
        const number2=req.body.number2;
        return res.status(200).json({
            sub:number1-number2
        });
    }catch (error) {
        console.log(error);
    }
}

exports.multi=(req,res)=>{
    try {
        const number1=req.body.number1;
        const number2=req.body.number2;
        return res.status(200).json({
            multi:number1*number2
        });
    }catch (error) {
        console.log(error);

    }
}

exports.div=(req,res)=>{
    try {
        const number1=req.body.number1;
        const number2=req.body.number2;
        return res.status(200).json({
            div:number1/number2
        })
    }catch (error){
        console.log(error);
    }
}