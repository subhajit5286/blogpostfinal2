const bcrypt = require('bcrypt')
const User = require('../database/models/User')
const jwt = require('jsonwebtoken')
process.env.SECRET_KEY = 'secret'


 
module.exports = (req, res) => {
    const {
        email,
        password
    } = req.body;
    
    // try to find the user
    User.findOne({
        email
    }, (error, user) => {
        if (user) {
            // compare passwords.
            bcrypt.compare(password, user.password, (error, same) => {
                if (same) {
                    
          const payload = {
            _id: user._id,
            username: user.username,
            email: user.email
          }
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          console.log(token)
         // res.cookie('token', token, { httpOnly: true })
          //.sendStatus(200)
         
         res.send(token)
         // .redirect('/userspost')
         
                } else {
                    res.send('login again')
                }
            })
        } else {
            return res.send('plese register urself')
        }
    })
}
