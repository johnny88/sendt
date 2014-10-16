/**
 * Broadcast updates to client when the model changes
 */

'use strict';

exports.register = function(socket) {
  // Contact.schema.post('save', function (doc) {
  //   onSave(socket, doc);
  // });
  // Contact.schema.post('remove', function (doc) {
  //   onRemove(socket, doc);
  // });
}

function onSave(socket, doc, cb) {
  socket.emit('contact:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('contact:remove', doc);
}