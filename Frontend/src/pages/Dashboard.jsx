import { useState, useEffect } from "react";

function Dashboard() {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [balance, setBalance] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  useEffect(() => {
    //hard coded dummy data till backend is ready
    const sampleIncomes = [
      { id: 1, source: "Salary", amount: 50000, date: "2025-02-01" },
      { id: 2, source: "Freelance", amount: 12000, date: "2025-02-15" },
    ];

    const sampleExpenses = [
      {
        id: 1,
        category: "Food",
        amount: 5000,
        date: "2025-02-05",
        description: "Lunch at restaurant",
      },
      {
        id: 2,
        category: "Rent",
        amount: 15000,
        date: "2025-02-10",
        description: "Monthly apartment rent",
      },
      {
        id: 3,
        category: "Utilities",
        amount: 3000,
        date: "2025-02-12",
        description: "Electricity and water bill",
      },
      {
        id: 4,
        category: "Groceries",
        amount: 2500,
        date: "2025-02-18",
        description: "Weekly grocery shopping",
      },
      {
        id: 5,
        category: "Entertainment",
        amount: 1000,
        date: "2025-02-20",
        description: "Movie tickets",
      },
    ];

    setIncomes(sampleIncomes);
    setExpenses(sampleExpenses);
    setFilteredExpenses(sampleExpenses);
    const totalIncome = sampleIncomes.reduce(
      (sum, item) => sum + item.amount,
      0
    );
    const totalExpense = sampleExpenses.reduce(
      (sum, item) => sum + item.amount,
      0
    );

    setBalance(totalIncome - totalExpense);
  }, []);

  useEffect(() => {
    const results = expenses.filter(
      (expense) =>
        expense.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        expense.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredExpenses(results);
  }, [searchTerm, expenses]);

  return (
    <div className="">
      <h2>Dashboard</h2>

      {/* current balance card */}
      <div className="card bg-primary text-white mb-4">
        <div className="card-body">
          <h4>Current Balance: ₹{balance}</h4>
        </div>
      </div>

      {/* income list */}
      <div className="card mb-4">
        <div className="card-header bg-success text-white">
          <h5>Incomes</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Source</th>
                  <th>Amount (₹)</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {incomes.map((income) => (
                  <tr key={income.id}>
                    <td>{income.source}</td>
                    <td>₹{income.amount}</td>
                    <td>{income.date}</td>
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
          </div>
        </div>
      </div>

      {/* expenses */}
      <div className="card">
        <div className="card-header bg-danger text-white">
          <h5>Expenses</h5>
        </div>
        <div className="card-body">
          <input
            type="text"
            placeholder="Search your expenses"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control mb-3"
          />
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Amount (₹)</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredExpenses.map((expense) => (
                  <tr key={expense.id}>
                    <td>{expense.category}</td>
                    <td>₹{expense.amount}</td>
                    <td>{expense.date}</td>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
