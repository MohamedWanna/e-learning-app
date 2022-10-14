const isAdmin = (req,res,next) => {
    if (req.user.role != "admin")
    if (req.user.role != "superAdmin") {
        return res.status(400).send({msg:"You are not authorized !!!"})
    } 
    next();
}

module.exports= isAdmin