const sessionModel=require("../models/sessionModel")

//add session
const addSession= async(req,res)=>{
    //const {title,instructor,content} = req.body;
    const url=`${req.protocol}://${req.get('host')}`
    const {file} = req
    try {
        const newsession= await new sessionModel({...req.body});
        newsession.image = `${url}/${file.path}`
        await newsession.save();
        res.send({session:newsession,msg:"Session added successfully"});
    } catch (error) {
        //console.log(error)
        res.status(400).send({msg:error.message});
    }
};

//Get all sessions
const getSessions = async(req,res) =>{
    try {
        const allSessions = await sessionModel.find()
        res.send({allSessions});
    } catch (error) {
        res.send(400).send({msg:error.message});
    }
}

//get product by Id
const getOneSession= async (req, res) => {
    try {
    const Session = await sessionModel.findById(req.params.id);
    res.send({ Session });
    //console.log(req.params.id);
    } catch (err) {
        res.status(400).send({msg:error.message});
    }
}

//delete a session from the database
const deleteSession=async(req,res) =>{
    try {
        await sessionModel.deleteOne({_id:req.params.id});
        res.send({msg:"Successfully deleted"});
    } catch (error) {
        res.status(400).send({msg:error.message});

    }
}

//update session
const updateSession = async(req,res) => {
    const url=`${req.protocol}://${req.get('host')}`
    const {file} = req
    try {
        const updatedSession = await sessionModel.updateOne(
            {_id:req.params.id},
            {$set:{...req.body,image:`${url}/${file.path}`}}
            );
        res.send({updatedSession,msg:"Successfully modified"})
    } catch (error) {
        res.status(400).send({msg:error.message});        
    }
}


module.exports={ addSession, getSessions, getOneSession, deleteSession, updateSession }