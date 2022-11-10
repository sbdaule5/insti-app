const express = require('express');
require('express-session');
const mongoose = require('mongoose');

const router = express.Router();
const UserModel = mongoose.model("user")

var getGoogleProfile;
// the get request body will contain searchBy that will tell how to find user it can be id or email
router.post('/', (req, res)=>{
	console.log('user controller received a request');
	var filter = {};
	if(req.body == undefined || !req.body.hasOwnProperty('searchBy')){
		res.send({});
	}
	else{
		if(req.body.searchBy == "id"){
			filter = {_id: req.body.id};
		}
		else if(req.body.searchBy == "email"){
			filter = {email: req.body.email};
		}
		UserModel.find(filter, (err, docs)=>{
			if(err) res.send(err);
			else{
				res.send(docs);
			}
		});
	} 
	console.log('user request served');
});
router.post('/myprofile', (req,res)=>{
	gProfile = getGoogleProfile();
	console.log('User requested his profile');
	//console.log(gProfile);
	if(gProfile.emails.length != 0){
		UserModel.find({email: gProfile.emails[0].value}, (err, docs)=>{
			if(err) res.send(err);
			else{
				// if user does not exist, then create the entry for the user
				if(docs.length == 0){
					console.log("creating new user");
					newProfile = {
						name: gProfile.name.givenName +' ' + gProfile.name.familyName,
						photo: "",
						id : 0,
						branch : "",
						degree : "",
						email : gProfile.emails[0].value,
						contact : ""
					}
					UserModel.create(newProfile);
					res.send(newProfile);
				}
				else{
					res.send(docs[0]);
				}
			}
		});
	}
});
router.post("/updateprofile", (req, res)=>{
	gProfile = getGoogleProfile();
	console.log("User requested profile update");
	// Check if body contains all the required information to update profile
	if(gProfile.emails.length != 0){
		update = {
			$set:{
				name: req.body.name,
				photo: gProfile.photos[0].value,
				id: req.body.id,
				branch: req.body.branch,
				contact: req.body.contact,
				degree: req.body.degree
			}
		};
		UserModel.updateOne({email: gProfile.emails[0].value}, update, (err, res)=>{
			if(!err){
				console.log("User updated his profile");			
			}
		});

	}
});
module.exports = {
	router : router,
	init: (_getGoogleProfile)=>{
		getGoogleProfile = _getGoogleProfile;
	}
};
