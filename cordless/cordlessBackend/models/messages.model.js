const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messagesSchema = new Schema({
    sender:{type: String, required: true},
    receiver:{type: String, required: true},
    date:{type: Date, required: true}
})

const messagesModel = mongoose.model('messages', messagesSchema);

module.exports = messagesModel;