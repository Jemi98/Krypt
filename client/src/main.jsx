import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import TransactionProvider from "./context/TransactionsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TransactionProvider>
    <App />
  </TransactionProvider>
);
