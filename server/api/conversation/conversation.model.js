'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = require('../user/user.model'),
    Message = require('../message/message.model');


var ConversationSchema = new Schema({
  participants: [User],
  messages: [Message]
});

module.exports = mongoose.model('Conversation', ConversationSchema);