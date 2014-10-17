'use strict';

var _ = require('lodash');
var mongoose = require('mongoose');
var User = require('../user/user.model');

// Get list of contacts
exports.index = function(req, res) {
  var userId = req.user._id;
  User.findById(userId).populate("contacts", "name email").exec(function (err, user) {
    if(err) { return handleError(res, err); }
    if (!user) return res.send(401);
    return res.json(200, user.contacts);
  });
};

// Get a single contact
exports.show = function(req, res) {
  Contact.findById(req.params.id, function (err, contact) {
    if(err) { return handleError(res, err); }
    if(!contact) { return res.send(404); }
    return res.json(contact);
  });
};

// Creates a new contact in the DB.
exports.create = function(req, res) {
  var user = req.user;
  user.contacts.push(req.params.id);
  user.save(function (err, user) {
    if(err) { return handleError(res, err); }
    if (!user) return res.send(401);
    return res.json(200, user.contacts);
  });
};

// Updates an existing contact in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Contact.findById(req.params.id, function (err, contact) {
    if (err) { return handleError(res, err); }
    if(!contact) { return res.send(404); }
    var updated = _.merge(contact, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, contact);
    });
  });
};

// Deletes a contact from the DB.
exports.destroy = function(req, res) {
  Contact.findById(req.params.id, function (err, contact) {
    if(err) { return handleError(res, err); }
    if(!contact) { return res.send(404); }
    contact.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

exports.createByEmail = function(req, res) {
  var currentUser = req.user;
  User.findOne({email: req.params.email}, function (err, user) {
    if(err) { return handleError(res, err); }
    if(!user) { return res.send(404); }
    currentUser.contacts.push(mongoose.Types.ObjectId(user._id));
    currentUser.save(function (err, user) {
      if(err) { return handleError(res, err); }
      if(!user) return res.send(401);
      return res.json(200, user.profile);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}