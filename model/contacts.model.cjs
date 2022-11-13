const mongoose = require('mongoose');

var contactSchama = new mongoose.Schema({
	name:{
		type : String,
		requred: "Required"
	},
	email : {
		type : String
	},
	phone:{
		type: Number
	}
});

mongoose.model("contacts", contactSchama);
