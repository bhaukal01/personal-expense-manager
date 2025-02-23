import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Expense({ addExpense }) {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState("Food");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || !description) {
      alert("Please enter amount and description.");
      return;
    }

    const newExpense = {
      id: Date.now(),
      category,
      amount: parseFloat(amount),
      date: date.toISOString().split("T")[0], // Format date as YYYY-MM-DD
      description,
    };

    addExpense(newExpense);
    setAmount("");
    setDescription("");
    setDate(new Date());
    setCategory("Food");
  };

  return (
    <div className="container">
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date</label>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Food">Food</option>
            <option value="Taxes">Taxes</option>
            <option value="Transportation">Transportation</option>
            <option value="Medical">Medical</option>
            <option value="Insurance">Insurance</option>
            <option value="Utilities">Utilities</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-danger">
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default Expense;
