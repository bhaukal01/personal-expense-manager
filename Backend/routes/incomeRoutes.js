const express = require("express");
const { addIncome } = require("../controllers/incomeController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/add", authMiddleware, addIncome);

module.exports = router;
