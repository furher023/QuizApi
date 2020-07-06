const jwt = require('jsonwebtoken')

function verifyUser(req,res,callback) {
    var token=req.header('APIauth-token')
    if (!token)
        return res.status(400).send('Bad Request')
    const verifiedToken = jwt.verify(token, 'this is secret')
    console.log(JSON.stringify(verifiedToken)+'=========')
}

module.exports = {
    verifyUser
}

