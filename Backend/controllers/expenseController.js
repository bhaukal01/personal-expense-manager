const Expense = require("../models/Expense");

exports.addExpense = async (req, res) => {
    const { category, amount, date, description } = req.body;
    const newExpense = await Expense.create({ userId: req.user.id, category, amount, date, description });
    res.json(newExpense);
};
