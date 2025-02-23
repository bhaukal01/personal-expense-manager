import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Income() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ amount, description, date });
    setAmount("");
    setDescription("");
  };

  return (
    <div className="container">
      <h2>Add Income</h2>
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
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <DatePicker
            className="form-control"
            selected={date}
            onChange={(date) => setDate(date)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Income
        </button>
      </form>
    </div>
  );
}

export default Income;
