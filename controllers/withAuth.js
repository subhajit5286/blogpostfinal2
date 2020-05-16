const jwt = require('jsonwebtoken');
process.env.SECRET_KEY = 'secret'
const withAuth = function(req, res, next) {
    const token = 
    req.body.token ||
    req.query.token ||
    req.headers['authorization'] ||req.cookies.token;
  
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        res.send(decoded)
        next();
      }
    });
  }
}
module.exports = withAuth;