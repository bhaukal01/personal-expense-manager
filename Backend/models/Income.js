const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    source: String,
    amount: Number,
    date: Date,
});

module.exports = mongoose.model("Income", IncomeSchema);
