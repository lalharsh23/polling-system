// routes/optionRoutes.js
const express = require("express");
const { addVote, deleteOption } = require("../controllers/optionController");
const router = express.Router();

router.post("/options/:id/add_vote", addVote);
router.delete("/options/:id/delete", deleteOption);

module.exports = router;
