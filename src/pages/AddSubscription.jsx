import { useState, useEffect } from "react";

function AddSubscription() {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    // Hardcoded dummy data till backend is ready
    const sampleSubscriptions = [
      {
        id: 1,
        name: "Netflix",
        amount: 500,
        startDate: "2025-02-01",
        schedule: "Monthly",
      },
      {
        id: 2,
        name: "Spotify",
        amount: 120,
        startDate: "2025-01-15",
        schedule: "Monthly",
      },
      {
        id: 3,
        name: "Amazon Prime",
        amount: 1500,
        startDate: "2025-01-01",
        schedule: "Annually",
      },
    ];

    setSubscriptions(sampleSubscriptions);
  }, []);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [schedule, setSchedule] = useState("Monthly");

  const handleAddSubscription = () => {
    if (!name || !amount || !startDate) {
      alert("Please fill all fields!");
      return;
    }

    const newSubscription = {
      id: subscriptions.length + 1,
      name,
      amount: parseFloat(amount),
      startDate,
      schedule,
    };

    setSubscriptions([...subscriptions, newSubscription]);
    setName("");
    setAmount("");
    setStartDate("");
    setSchedule("Monthly");
  };

  return (
    <div className="container mt-4">
      <h2>Add Subscription</h2>

      {/* Add Subscription Form */}
      <div className="card p-3 mb-4">
        <div className="form-group mb-3">
          <label>Subscription Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter subscription name"
          />
        </div>

        <div className="form-group mb-3">
          <label>Amount (₹)</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>

        <div className="form-group mb-3">
          <label>Start Date</label>
          <input
            type="date"
            className="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <label>Schedule</label>
          <select
            className="form-control"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
          >
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Annually">Annually</option>
          </select>
        </div>

        <button
          className="btn btn-primary w-100"
          onClick={handleAddSubscription}
        >
          Add Subscription
        </button>
      </div>

      {/* List of Subscriptions */}
      <h3>Existing Subscriptions</h3>
      {subscriptions.length === 0 ? (
        <p>No subscriptions added yet.</p>
      ) : (
        <table className="table table-striped table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount (₹)</th>
              <th>Start Date</th>
              <th>Schedule</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((sub) => (
              <tr key={sub.id}>
                <td>{sub.name}</td>
                <td>₹{sub.amount}</td>
                <td>{sub.startDate}</td>
                <td>{sub.schedule}</td>
                <td>
                  <button className="btn btn-sm">
                    <img
                      width={20}
                      src="https://img.icons8.com/?size=100&id=4U14q1ay1DnU&format=png&color=FF0000"
                      alt="Delete"
                    />
                  </button>
                  <button className="btn btn-sm">
                    <img
                      width={20}
                      src="https://img.icons8.com/?size=100&id=oR5tfd18Ei7C&format=png&color=0000FF"
                      alt="Edit"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AddSubscription;
