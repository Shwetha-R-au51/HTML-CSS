const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
    phone: {
        type: String,
        required:true
    },
    type:String
	
});

const User = mongoose.model("users", userSchema);
module.exports = User;




/* 

import mongoose from "mongoose";

const projectSchema= new mongoose.Schema({
    name:String,
    email: String,
    password:String,
    phone: String,
    type: String
});

const User = mongoose.model("User",projectSchema)

export default User; */