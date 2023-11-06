import React from "react";
import "../styles/transaction-card.css";
import { Link } from "react-router-dom";

function TransactionCard({ id, item_name, date, amount, from }) {

    return (

        <div className="transaction-card">
            <div className="transaction-info">
                <div>  {id} </div>
                <Link to="/details" className="transaction-category"> {item_name} </Link>
                <div> {date}</div>
                <div> {amount}</div>
                <div>{from}</div>
            </div>
        </div>
    )

};

export default TransactionCard;