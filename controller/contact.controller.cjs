const express = require('express');
require('express-session');
const mongoose = require('mongoose');

const router = express.Router();
const ContactModel = mongoose.model("contacts")


router.post('/', (req, res)=>{
	console.log('User requested contacts');
	var filter = {};
	ContactModel.find(filter, (err, docs)=>{
		if(err) res.send(err);
		else{
			res.send(docs);
		}
	});
});

module.exports = {
	router: router
}
