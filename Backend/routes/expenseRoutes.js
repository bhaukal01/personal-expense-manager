const express = require("express");
const { addExpense } = require("../controllers/expenseController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/add", authMiddleware, addExpense);

module.exports = router;
