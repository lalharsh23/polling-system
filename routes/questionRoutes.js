// routes/questionRoutes.js
const express = require("express");
const {
    createQuestion,
    addOption,
    getQuestion,
    deleteQuestion,
} = require("../controllers/questionController");
const router = express.Router();

router.post("/questions/create", createQuestion);
router.post("/questions/:id/options/create", addOption);
router.get("/questions/:id", getQuestion);
router.delete("/questions/:id/delete", deleteQuestion);

module.exports = router;
