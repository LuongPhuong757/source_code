const Account = require('../../model/AccountModel')
const Cart = require('../../model/Cart_Account')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.regester = async (req, res) => {
    try {
        console.log(req.body, 'bodyyyyyyyyyyyy')
        let { userName, password, fullName } = req.body
        let dataAcount = new Account({
            fullName,
            userName,
            password: bcrypt.hashSync(password, 10)
        })
        dataAcount.role = "Admin"
        let saveAccount = await dataAcount.save()
        let dataCart = new Cart({
            id_account: saveAccount._id,
            product: []
        })
        let saveCart = await dataCart.save()
        let findAccount = await Account.findById(saveAccount._id)
        findAccount.id_cart = saveCart._id
        await findAccount.save()
        res.send({
            findAccount,
            saveCart
        })
    } catch (err) {
        res.send({
            message: err.message
        })
    }
}

exports.login = async (req, res) => {
    try {
        console.log(req.body, 'bodyyyyyyyyyyyy 2')
        let { userName, password } = req.body
        let findAccount = await Account.findOne({ userName })
        let token = jwt.sign({ id: findAccount._id }, 'Luong Tuan Phuong', { expiresIn: 60 });
        res.send({
            account: findAccount,
            token: token
        })
    } catch (err) {
        res.send({
            message: err.message
        })
    }
}