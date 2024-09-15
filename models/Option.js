// models/Option.js
const mongoose = require("mongoose");

const OptionSchema = new mongoose.Schema({
    text: String,
    votes: { type: Number, default: 0 },
    link_to_vote: String,
});

module.exports = mongoose.model("Option", OptionSchema);
