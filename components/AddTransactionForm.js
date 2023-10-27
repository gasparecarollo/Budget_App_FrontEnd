import React from "react";
import { useState, useEffect } from "react";
import "../styles/add-transaction-form.css";

function AddTransactionForm() {


    const [transaction, setTransaction] = useState({ date: "", item_name: "", category: "", amount: "", from: "" });

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setTransaction(event.target.value);
    }

    return (
        <div className="add-transaction-container">
            <h2 className="add-transaction-title" placeholder="Add Transaction">Add Transaction</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Date:</label>
                    <input name={"Date"} type="text" value={Date} className="form-input" />
                </div>
                <div className="form-group">
                    <label className="form-label"> Category:</label>
                    <input name={"Category"} type="text" value={Category} className="form-input" />
                </div>
                <div className="form-group">
                    <label className="form-label"> Amount:</label>
                    <input name={"Amount"} value={Amount} onChange={handleChange}
                        type="text" className="form-input" />
                </div>
                <div className="form-group">
                    <label className="form-label"> From:</label>
                    <input name={"From"} value={From} type="text" className="form-input" />
                </div>
                <button type="submit" className="submit-button"> Submit</button>
            </form>

        </div>

    )
};



export default AddTransactionForm;