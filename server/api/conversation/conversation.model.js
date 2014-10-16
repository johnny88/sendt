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

module.exports = mongoose.model('Conversation', ConversationSchema);