const Post = require('../database/models/Post')
const User = require('../database/models/User')


process.env.SECRET_KEY = 'secret'
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
     const token = 
       req.body.token ||
       req.query.token ||
       req.headers['authorization'] 
       //||req.cookies.token;
     var decoded = jwt.verify(token, process.env.SECRET_KEY)
    

User.findById(decoded._id
, (error, user) => {
    if (user) {
        Post.find({username:user.username}, (error, post) => {
            if (post) {
            res.send(post)
        }
        if (!post) {
            
            res.send("no post found for this user")
        }
            if (error) {
                res.send("error")
            }
            }) 
}
if (!user) {
    //console.log("success1")
    res.send("invalid user")
}
    if (error) {
        console.log("ERROR")
        res.send("error")
    }
    }) 
}
