// controllers/optionController.js
const Option = require("../models/Option");
const Question = require("../models/Question");

exports.addVote = async (req, res) => {
    try {
        const option = await Option.findById(req.params.id);
        if (!option) return res.status(404).json({ message: "Option not found" });

        option.votes += 1;
        await option.save();

        res.json(option);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteOption = async (req, res) => {
    try {
        const option = await Option.findById(req.params.id);
        if (!option) return res.status(404).json({ message: "Option not found" });

        // Prevent deletion if the option has any votes
        if (option.votes > 0) {
            return res.status(400).json({ message: "Option has votes and cannot be deleted" });
        }
        // If no votes, delete the option
        await Option.findByIdAndDelete(req.params.id);

        // remove the option from questions
        await Question.updateMany(
            { options: req.params.id },
            { $pull: { options: req.params.id } }
        );

        res.json({ message: "Option deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
