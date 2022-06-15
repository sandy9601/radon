const userModel = require("../models/userModel")

    const createUser= async function (req, res) {
        data=req.body
        data.isFreeAppUser=req.appTypefree
        let savedData= await userModel.create(data)
        res.send({msg: savedData})
    }
module.exports.createUser= createUser
