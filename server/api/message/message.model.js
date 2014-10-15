'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var MessageSchema = new Schema({
	to: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	from: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	type: String,
	time: {
		sent: {
			type: Date,
			default: Date.now
		},
		recieved: Date,
		viewed: Date
	},
	status: {
		type: String,
		default: "sent"
	},
	location: {
		sent: {
			lng: Number,
			lat: Number
		},
		recieved: {
			lng: Number,
			lat: Number
		},
		viewed: {
			lng: Number,
			lat: Number
		}
	},
	message: {
		category: String,
		text: String,
		data: Buffer 	
	}
});

module.exports = mongoose.model('Message', MessageSchema);