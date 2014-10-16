'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var MessageSchema = new Schema({
	to: {
		type: Schema.ObjectId,
		ref: 'User',
		required: true
	},
	from: {
		type: Schema.ObjectId,
		ref: 'User',
		required: true
	},
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
	},
	conversation: {
		type: Schema.ObjectId,
		ref: 'User',
		required: true
	}
});


/**
 * Validations
 */

// Validation imports
var Conversation = require('../conversation/conversation.model');
var async = require('async');

// Validate conversation ID refers to a valid conversation
MessageSchema
  .path('conversation')
  .validate(function(conversation, respond) {
    Conversation.findById(conversation, function(err, conversation) {
      if(err) { respond(false); }
      if(!conversation) { respond(false); }
      respond(true);
    });
}, 'The specified conversation does not exist.');

module.exports = mongoose.model('Message', MessageSchema);
