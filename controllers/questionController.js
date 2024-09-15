// controllers/questionController.js
const Question = require("../models/Question");
const Option = require("../models/Option");

exports.createQuestion = async (req, res) => {
    try {
        const question = new Question({ title: req.body.title });
        await question.save();
        res.status(201).json(question);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addOption = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        if (!question) return res.status(404).json({ message: "Question not found" });

        // Create the option without the link_to_vote
        let option = new Option({
            text: req.body.text,
        });

        // Save the option to generate _id
        await option.save();

        // Update link_to_vote after saving the option
        option.link_to_vote = `${process.env.SERVER_URL}/api/options/${option._id}/add_vote`;
        await option.save(); // Save the option again with the updated link_to_vote

        // Add the option to the question and save the question
        question.options.push(option);
        await question.save();

        res.status(201).json(option);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getQuestion = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id).populate("options");
        res.json(question);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteQuestion = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id).populate("options"); // Populate the options to access them
        if (!question) return res.status(404).json({ message: "Question not found" });

        // Check if any option has votes
        const hasVotes = question.options.some((option) => option.votes > 0);
        if (hasVotes) {
            return res.status(400).json({
                message: "Question can't be deleted because one or more options have votes",
            });
        }

        // If no options have votes, delete the question
        await Question.findByIdAndDelete(req.params.id);
        res.json({ message: "Question deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
