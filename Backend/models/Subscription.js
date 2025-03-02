const mongoose = require("mongoose");

const SubscriptionSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    name: String,
    amount: Number,
    startDate: Date,
    schedule: { type: String, enum: ["Weekly", "Monthly", "Annually"] },
});

module.exports = mongoose.model("Subscription", SubscriptionSchema);
