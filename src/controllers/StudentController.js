const StudentModel = require('../models/StudentModel')
const jwt = require('jsonwebtoken');


//create student

exports.createStudent =async (req,res)=>{
    try {
        let reqBody = req.body;
    let result = await StudentModel.create(reqBody);
    res.status(200).json({status:"success",data:result})
    } catch (error) {
        res.status(400).json({status:"fail",error:error})
    }
}
//login student
exports.loginStudent = (req,res)=>{
    let email = req.body['email'];
    let password = req.body['password'];
    StudentModel.find({email: email,password:password})
    .then((result)=>{
       if(result.length>0){
           let payload = {
               exp: Math.floor(Date.now() / 1000*(24*60*60)),
               data:result[0]
           };
           let token = jwt.sign(payload,"key12345@");
           res.status(200).json({status:"login success",token:token,data:result})
       }
    }).catch(err=>{

        res.status(400).json({status:"fail",error:err})
    })

};

//update student
exports.updateStudent = async (req,res)=>{
   try{
       let id = req.params.id;
       let reqBody = req.body;
       let result = await  StudentModel.updateOne({_id: id, $set:reqBody});
       res.status(200).json({status:"update success",data:result})
   }
    catch(error){
       res.status(400).json({status:"update fail",error:error})
    }
};

//delete student
exports.deleteStudent = async (req,res)=>{

    try{
        let id = req.params.id;
        let result = await StudentModel.deleteOne({_id: id});
        res.status(200).json({status:"delete success",data:result})
    }catch(error){
        res.status(400).json({status:"fail",error:error})
    }
}