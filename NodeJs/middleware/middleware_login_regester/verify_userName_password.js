const Account = require('../../model/AccountModel')
const bcrypt = require('bcrypt');
exports.verify_userName_password = async (req, res, next) => {
    try {
        let { userName, password } = req.body
        let findAccount =await Account.findOne({ userName })
        if (!findAccount) {
            return res.send({
                message: 'Account wrong'
            })
        }
        // console.log(checkPassword,'checkkk')
        let checkPassword = await bcrypt.compareSync(password, findAccount.password)
        console.log(checkPassword,'checkkk')
        if (!checkPassword) {
            return res.send({
                message: 'Password wrong'
            })
        }
        next()
    } catch (err) {
        res.send({
            message: err.message
        })
    }
}