const Subscription = require("../models/Subscription");

exports.addSubscription = async (req, res) => {
    const { name, amount, startDate, schedule } = req.body;
    const newSubscription = await Subscription.create({ userId: req.user.id, name, amount, startDate, schedule });
    res.json(newSubscription);
};
