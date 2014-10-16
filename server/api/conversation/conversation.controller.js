'use strict';

var async = require('async');
var _ = require('lodash');
var Conversation = require('./conversation.model');
var User = require('../user/user.model');
var Conversation = require('../conversation/conversation.model');
var Message = require('../message/message.model');

// Get list of all conversations that the current user has
exports.index = function(req, res) {
  var userId = req.user._id;
  User.findById(userId).populate("conversations", "owner participants").exec(function (err, user) { 
    if(err) { return handleError(res, err); }
    
    // Populate the participants of our conversations
    async.each(user.conversations, function(conversation, callback) {
      User.populate(conversation, {"path": "participants", "select": "name email"}, function(err) {
        if(err) { return handleError(res, err); }
        callback();
      });
    }, function(err) {
        if(err) { return handleError(res, err); }
        res.json(200, user.conversations);
    });
  });
};

// Get a single conversation
exports.show = function(req, res) {
  Conversation.findById(req.params.id, function (err, conversation) {
    if(err) { return handleError(res, err); }
    if(!conversation) { return res.send(404); }
    return res.json(conversation);
  });
};

// Creates a new conversation in the DB.
exports.create = function(req, res) {
  Conversation.create(req.body, function(err, conversation) {
    if(err) { return handleError(res, err); }
    return res.json(201, conversation);
  });
};

// Updates an existing conversation in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Conversation.findById(req.params.id, function (err, conversation) {
    if (err) { return handleError(res, err); }
    if(!conversation) { return res.send(404); }
    var updated = _.merge(conversation, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, conversation);
    });
  });
};

// Deletes a conversation from the DB.
exports.destroy = function(req, res) {
  Conversation.findById(req.params.id, function (err, conversation) {
    if(err) { return handleError(res, err); }
    if(!conversation) { return res.send(404); }
    conversation.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}