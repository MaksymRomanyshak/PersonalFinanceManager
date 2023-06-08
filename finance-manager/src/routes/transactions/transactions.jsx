import { ListGroup } from "react-bootstrap";
import TrasactionItem from "../../components/transaction-item/transaction-item";

import "./transactions.css";

const Transactions = () => {
  const transactionsInfo = [
    {
      id: 1,
      value: 250,
      value1: 17,
      date: "02.08.2004",
    },
    {
      id: 2,
      value: 170,
      value1: 17,
      date: "02.08.2004",
    },
    {
      id: 3,
      value: 37,
      date: "02.08.2004",
    },
  ];
  return (
    <div className="transactions-list">
      <h3>Expenses</h3>
      <ListGroup style={{ width: "50%" }}>
        {transactionsInfo.map((transaction) => (
          <TrasactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ListGroup>
    </div>
  );
};

export default Transactions;
