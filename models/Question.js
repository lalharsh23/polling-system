// models/Question.js
const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
    title: String,
    options: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Option",
        },
    ],
});

module.exports = mongoose.model("Question", QuestionSchema);
