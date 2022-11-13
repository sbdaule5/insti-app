const mongoose = require('mongoose');
const config = require('../config.cjs');
mongoose.connect(config.DATABASE_URL, (error)=>{
	if(error) throw error;
	else console.log("Sucessfully connected to database");
})

const User = require('./user.model.cjs');
const Contact = require('./contacts.model.cjs');
