'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var ConversationSchema = new Schema({
  participants: [{
  	type: Schema.Types.ObjectId, 
  	ref: 'User'
  }],
  messages: [{
  	type: Schema.Types.ObjectId, 
  	ref: 'Message'
  }],
  owner: {
    type: Schema.Types.ObjectId, 
    ref: 'User'
  }
});


/**
 * Validations
 */

// Validation imports
var User = require('../user/user.model');
var async = require('async');

// Validate that a new conversation has participants
ConversationSchema
  .path('participants')
  .validate(function(participants) {
    return participants.length;
  }, 'You cannot have a conversation without participants!');

// Validate that submitted participants are valid Users
ConversationSchema
  .path('participants')
  .validate(function(participants, respond) {
    async.each(participants, function(participant, callback) {
      User.findOne({'_id': participant}, function(err, user) {
        if(err) { return callback(err) }
        if(!user) { return callback("No such user exists."); }
        callback();
      });
    }, function(err) {
      if(err) { return respond(false); }
      respond(true);
    });
  }, 'There are unknown participants.');

module.exports = mongoose.model('Conversation', ConversationSchema);