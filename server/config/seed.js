/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var mongoose = require('mongoose');

// Import our models
var User = require('../api/user/user.model');
var Conversation = require('../api/conversation/conversation.model');
var Message = require('../api/message/message.model');

// Import our data
var users = require('./data/users.json');

// Clean out the database
User.find().remove().exec();
Conversation.find().remove().exec();
Message.find().remove().exec();

// First we create some users
User.create(users, function(err, users) {
  if (err) {
    console.log("There was an error populating users");
    console.log(err);
  } else {
    console.log("Sucessfully added sample users...");

    User.find(function(err, users) {
      if (err) {
        console.log("There was an error finding users");
        console.log(err);
      } else {
        // This array will hold our list of conversation participants
        var participants = [];
        
        // Add the participants to the array
        for (var idx in users) {
          participants.push(mongoose.Types.ObjectId(users[idx]._id));
        }

        // Create the new conversation
        var conversation = new Conversation({
          messages: [],
          participants: participants,
          owner: mongoose.Types.ObjectId(users[0]._id)
        });

        // Save the new conversation
        conversation.save(function(err, conversation) {
          if (err) {
            console.log("Could not save conversation...");
            console.log(err);
          } else {
            // Add the conversation to the user objects
            for (var idx in users) {
              users[idx].conversations.push(conversation);
              users[idx].save();
            }

            // Add some messages to the conversation
            var message = new Message({
              to: users[0]._id,
              from: users[1]._id,
              message: {
                category: "text",
                text: "Hello world. Woo!"
              },
              conversation: mongoose.Types.ObjectId(conversation._id)
            });

            // Save the message
            message.save(function(err, message) {
              if (err) {
                console.log("Could not save message");
                console.log(err);
              } else {
                conversation.messages.push(message);
                conversation.save();
              }
            });
          }
        });

        // Give the users some contacts
        users[0].contacts = [mongoose.Types.ObjectId(users[1]._id)];
        users[0].save();
        
        users[1].contacts = [mongoose.Types.ObjectId(users[0]._id)];
        users[1].save();
      }
    });
  }
});
