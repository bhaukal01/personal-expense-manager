const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/authRoutes"));
app.use("/income", require("./routes/incomeRoutes"));
app.use("/expense", require("./routes/expenseRoutes"));
app.use("/subscription", require("./routes/subscriptionRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));


