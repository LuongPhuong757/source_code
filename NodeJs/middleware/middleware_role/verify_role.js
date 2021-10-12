const jwt = require('jsonwebtoken');
const Account = require('../../model/AccountModel')
exports.verify_role = async (req, res, next) => {
    try {
        let token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.send({
                message: 'Token Wrong'
            })
        }
        jwt.verify(token, 'Luong Tuan Phuong', function (err, decoded) {
            if (err) {
                return res.send({
                    message: 'Wrong Token'
                })
            } else {
                req.id = decoded.id
                Account.findById(decoded.id)
                    .then(next())
                    .catch(() => res.send({
                        message: 'Not Account'
                    }))
            }
        })
    } catch (err) {
        res.send({
            message: err.message
        })
    }
}

exports.verify_admin = async (req, res, next) => {
    try {
        let id = req.id
        let findAccount = await Account.findById(id)
        if (findAccount.role === 'Admin') {
            next()
        } else {
            return res.send({
                message: 'Not Admin'
            })
        }
    } catch (err) {
        res.send({
            message: err.message
        })
    }
}