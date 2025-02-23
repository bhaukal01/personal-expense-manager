import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddSubscription({ addSubscription }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [schedule, setSchedule] = useState("Weekly");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !amount) {
      alert("Please enter subscription name and amount.");
      return;
    }

    const newSubscription = {
      id: Date.now(),
      name,
      amount: parseFloat(amount),
      startDate: startDate.toISOString().split("T")[0],
      schedule,
    };

    addSubscription(newSubscription);
    setName("");
    setAmount("");
    setStartDate(new Date());
    setSchedule("Weekly");
  };

  return (
    <div className="container">
      <h2>Add Subscription</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Subscription Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

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
          <label className="form-label">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Schedule</label>
          <select
            className="form-select"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
          >
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Annually">Annually</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Add Subscription
        </button>
      </form>
    </div>
  );
}

export default AddSubscription;
