import React from "react";
import TransactionCard from "./TransactionCard";
import "../styles/TransactionList.css";
import { useState, useEffect } from "react";


function TransactionList() {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3333/transactions")
            .then(response => response.json())
            .then(data => setTransaction(data))
    }, [])


    return (

        <div className="transaction-list">
            {TransactionList.map(tranaction => {
                return (
                    <TransactionCard
                        key={tranaction.id}
                        item_name={transactions.item.name}
                        date={transaction.date}
                        amount={transaction.amount}
                        from={tranaction.from}
                    />
                )
            }
            )
            }
        </div>
    )
}

/* <TransactionCard
key={1}
date={"10.24.2023"}
amount={300}
category={"food"}
from={"John Doe"} /> 
<TransactionCard />
</div>
*/





export default TransactionList;