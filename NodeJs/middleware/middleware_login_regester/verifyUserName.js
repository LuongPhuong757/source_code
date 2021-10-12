const Account = require('../../model/AccountModel')
const bcrypt = require('bcrypt');
exports.verifyUserName =async (req,res,next) => {
    try {
        let {userName}= req.body
        let findAccount =await Account.findOne({userName})
        if(findAccount) {
            return res.send({
                message : 'Account Not Exist'
            })
        }
        return next()
    }catch(err) {
        res.send({
            message : err.message
        })
    }
}