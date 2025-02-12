const {WorkModel} = require("../models/WorksModel");

//create work
exports.createWork = async (req, res) => {
    try{
        let email = req.headers['email'];
        let title = req.body['title'];
        let description=req.body['description'];
        let classNote =  req.body['classNote'];
        let status = req.body['status'];

        let workData = {
            email: email,
            title: title,
            description: description,
            classNote: classNote,
            status: status,
        };
        let result = await  WorkModel.create(workData);
        res.status(200).json({status: "work create success", data: result});

    }catch(err){
        res.status(401).json({ status: "fail", error: err });
    }
};

//get work
exports.readWork = async (req, res) => {
    try{
        let email = req.headers['email'];
        let result = await WorkModel.find({email: email});
        if(result.length>0){
            res.status(200).json({status: "work list get success", data: result});
        } else{
            res.status(401).json({ status: "No Work Found",  });
        }
    }catch (error){
        res.status(400).json({status:"fail",error:error})
    }
}
//update work
exports.updateWork = async (req, res) => {

    try{
        let email = req.headers['email'];
        let reqBody = req.body;
        let id = req.params.id;
        let result = await WorkModel.updateOne({email: email,_id:id},{$set:reqBody});
        res.status(200).json({status: "work update success", data: result});
    }
    catch(err){
        res.status(400).json({status:"fail",error:err});
    }
}

//delete work
exports.deleteWork = async (req, res) => {
    try{
        let email = req.headers['email'];
        let id = req.params.id;
        let result = await WorkModel.deleteOne({email: email,_id:id});
        res.status(200).json({status: "work delete success", data: result});
    }catch(err){
        res.status(400).json({status:"fail",error:err});
    }
}