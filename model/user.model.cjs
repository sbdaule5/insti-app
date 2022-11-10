const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	id : {
		type : Number
	},
	name:{
		type : String,
		requred: "Required"
	},
	branch:{
		type : String
	},
	degree : {
		type : String
	},
	email : {
		type : String
	},
	photo:{
		type : String
	},
	contact:{
		type: String
	}

});

mongoose.model("user", userSchema);
