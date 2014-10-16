'use strict';

var _ = require('lodash');
var Conversation = require('../conversation/conversation.model');
var Message = require('./message.model');

// Find all messages that we have sent or recieved
exports.index = function(req, res) {
  var userId = req.user._id;
  Message.find({$or: [{to: userId}, {from: userId}]}, "to from status message time conversation", function(err, messages) {
    if(err) { return handleError(res, err); }
    return res.json(messages);
  });
};

// Get messages from a single conversation
exports.show = function(req, res) {
  Conversation.findById(req.params.id).populate("messages", "to from status message time").exec(function(err, conversation) {
    if(err) { return handleError(res, err); }
    if(!conversation) { return res.send(404); }
    return res.json(conversation.messages);
  });
};

// Creates a new message in the DB.
exports.create = function(req, res) {
  Message.create(req.body, function(err, message) {
    if(err) { return handleError(res, err); }
    return res.json(201, message);
  });
};

// Updates an existing message in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Message.findById(req.params.id, function (err, message) {
    if (err) { return handleError(res, err); }
    if(!message) { return res.send(404); }
    var updated = _.merge(message, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, message);
    });
  });
};

// Deletes a message from the DB.
exports.destroy = function(req, res) {
  Message.findById(req.params.id, function (err, message) {
    if(err) { return handleError(res, err); }
    if(!message) { return res.send(404); }
    message.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}