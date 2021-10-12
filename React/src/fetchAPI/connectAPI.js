import * as constants from '../constants'
function connnectAPI(method, path, data) {
    let config = {}
    if (method === constants.HTTP_GET || method === constants.HTTP_DELETE) {
        config = {
            method
        }
    } else {
        config = {
            method: method,
            // headers: constants.HEADERS,
            body: data
        }
    }
    return new Promise((reslove, reject) => {
        const domain = constants.DOMAIN + path
        fetch(domain, config)
            .then(res => reslove(res.json()))
            .catch(err => reject(err))
    })
}
export default connnectAPI