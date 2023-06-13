import { useEffect } from "react";

import { ListGroup } from "react-bootstrap";
import TrasactionItem from "../../components/transaction-item/transaction-item";

import "./transactions.css";

const Transactions = ({ state, getData }) => {
  useEffect(() => {
    getData();
  }, []);

  const getTotalExpenses = () => {
    let sum = 0;
    for (const el of state.posts) {
      sum += Number(el.value);
    }
    return <b>TOTAL: {sum}$</b>;
  };

  return (
    <div className="transactions-list">
      <h3>Expenses</h3>
      <ListGroup style={{ width: "50%" }}>
        {state.posts.map((transaction) => (
          <TrasactionItem key={transaction._id} transaction={transaction} />
        ))}
        <ListGroup.Item style={{ textAlign: "left" }}>
          <span>{getTotalExpenses()}</span>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Transactions;
