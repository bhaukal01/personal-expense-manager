const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    category: String,
    amount: Number,
    date: Date,
    description: String,
});

module.exports = mongoose.model("Expense", ExpenseSchema);
