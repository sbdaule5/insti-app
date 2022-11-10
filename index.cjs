const express = require('express');
const app = express();
const session = require('express-session');
const connection = require('./model/index.cjs')

app.use(session({
	resave: false,
	saveUninitialized: true,
	secret: 'SECRET'
}));
app.use(express.json());

// My modules
const auth = require('./api/auth/google.cjs');
auth.init(app);
const UserController = require('./controller/user.controller.cjs');
UserController.init(auth.getUserProfile);
app.use('/api/user', UserController.router);
/*const mongo = require('./api/mongodb/db.cjs');
mongo.init(app, dbConnected);
var db = null;
function dbConnected(_db){
	db = _db;
	authdb.init(app, db.db("insti-app"));
}
const authdb = require('./api/auth/databse.cjs');
*/

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('App listening on port ' + port));

process.on('exit', (code) =>{
	db.close();
	console.log(`Closing server with code ${code}`);
});
process.on('SIGINT', (code) =>{
	db.close();
	console.log(`Closing server with code ${code}`);
});
