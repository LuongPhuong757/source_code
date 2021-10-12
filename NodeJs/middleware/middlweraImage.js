let multer = require('multer')
let path = require('path')
let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        let url = path.join(__dirname, '..', 'public')
        callback(null, url)
    },
    filename: (req, file, callback) => {
        let fileName = file.originalname.split(' ').join('-')
        callback(null, fileName)
    }
})

module.exports = multer({ storage: storage })