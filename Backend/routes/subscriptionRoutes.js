const express = require("express");
const { addSubscription } = require("../controllers/subscriptionController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/add", authMiddleware, addSubscription);

module.exports = router;
