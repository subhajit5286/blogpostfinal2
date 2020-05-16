const express = require('express');const app = new express();const path = require('path');
const expressSession = require('express-session');const connectMongo = require('connect-mongo');require("dotenv").config();
//const { engine } = require('express-edge');
//const expressEdge = require('express-edge');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');  const Post = require('./database/models/Post');
const homePageController = require('./controllers/homePage');
const storePostController = require('./controllers/storePost');
const getPostController = require('./controllers/getPost');
const editPostController = require('./controllers/editPost');
const deletePostController = require('./controllers/deletePost');
const storeUserController = require('./controllers/storeUser');
const loginUserController = require('./controllers/loginUser');
const logoutController = require("./controllers/logout");
const getPostbyUserController = require("./controllers/getPostbyUser");

mongoose.set("useFindAndModify", false);
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true,useUnifiedTopology: true })
    .then(() => 'You are now connected to Mongo!')
    .catch(err => console.error('Something went wrong', err))

    const mongoStore = connectMongo(expressSession);
  app.use(expressSession({
        secret: 'secret',resave: false,
        saveUninitialized: true,path: '/userslogin', httpOnly: true,
        store: new mongoStore({
            mongooseConnection: mongoose.connection
        })
    }));
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
          );
          res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
        next();
      });
app.use(express.static('public'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(expressSession({
    secret: 'secret'
}));
const cookieParser = require('cookie-parser');

app.use(cookieParser());
//see all post
app.get('/', homePageController);
//posts/new
// app.get('/postsa', (req, res) => {
//     res.render('create')
// });
//posts/store
app.post('/postsb',storePostController );

app.get('/post:id',getPostController );
//delete
app.delete('/post:id',deletePostController );
app.put('/post:id',editPostController );
app.post('/usersregister', storeUserController);
app.post('/userslogin', loginUserController);
app.get('/logout', logoutController);
app.get('/userspost', getPostbyUserController);

var port = process.env.PORT || 4000;
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
       res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
 }
 
app.listen(port, () => {
    console.log('App listening on port 4000')
});