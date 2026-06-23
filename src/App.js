import React, { useState } from "react";

const BudgetTrackerApp = () => {
  const [transactions, setTransactions] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim() || !amount) {
      alert("Please add a valid description and amount.");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      text: text,
      amount: parseFloat(amount),
    };

    setTransactions([...transactions, newTransaction]);
    setText("");
    setAmount("");
  };

  // Calculate total balance automatically
  const totalBalance = transactions.reduce((acc, item) => acc + item.amount, 0);

  // App Styling Objects
  const appContainerStyle = {
    fontFamily: "'Segoe UI', Roboto, sans-serif",
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    backgroundColor: "#ffffff",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "25px",
  };

  const inputStyle = {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  };

  const buttonStyle = {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#4f46e5",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const listStyle = {
    listStyleType: "none",
    padding: 0,
    maxHeight: "250px",
    overflowY: "auto",
  };

  return (
    <div style={appContainerStyle}>
      <h2 style={{ textAlign: "center", color: "#1f2937", margin: "0 0 20px 0" }}>
        Budget Tracker
      </h2>

      {/* Total Balance Display */}
      <div style={{ textAlign: "center", marginBottom: "25px" }}>
        <h4 style={{ margin: "0", color: "#6b7280", textTransform: "uppercase", fontSize: "0.85rem" }}>
          Your Balance
        </h4>
        <h1 style={{ margin: "5px 0 0 0", color: totalBalance >= 0 ? "#10b981" : "#ef4444" }}>
          Rs.{totalBalance.toFixed(2)}
        </h1>
      </div>

      {/* Transaction Form */}
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Enter item name... (e.g., Salary, Coffee)"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={inputStyle}
        />
        <input
          type="number"
          step="any"
          placeholder="Amount (Negative = expense, Positive = income)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Add Transaction
        </button>
      </form>

      {/* Transaction List */}
      <h3 style={{ borderBottom: "1px solid #e5e7eb", paddingBottom: "8px", color: "#374151" }}>
        History
      </h3>
      
      {transactions.length === 0 ? (
        <p style={{ color: "#9ca3af", textAlign: "center", fontSize: "0.9rem" }}>No transactions yet.</p>
      ) : (
        <ul style={listStyle}>
          {transactions.map((transaction) => {
            const isIncome = transaction.amount >= 0;

            return (
              <li
                key={transaction.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                  marginBottom: "8px",
                  borderRadius: "6px",
                  backgroundColor: "#f9fafb",
                  borderLeft: `5px solid ${isIncome ? "#10b981" : "#ef4444"}`,
                  // Ternary operator trick: Green text for income, Red text for expense
                  color: isIncome ? "#10b981" : "#ef4444",
                  fontWeight: "600",
                }}
              >
                <span>{transaction.text}</span>
                <span>
                  {isIncome ? "+" : ""}
                  Rs.{transaction.amount.toFixed(2)}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default BudgetTrackerApp;