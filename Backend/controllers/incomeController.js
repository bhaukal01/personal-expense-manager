const Income = require("../models/Income");

exports.addIncome = async (req, res) => {
    const { source, amount, date } = req.body;
    const newIncome = await Income.create({ userId: req.user.id, source, amount, date });
    res.json(newIncome);
};
