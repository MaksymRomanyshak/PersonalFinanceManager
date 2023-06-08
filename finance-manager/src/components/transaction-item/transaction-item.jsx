import { ListGroup } from "react-bootstrap";

import "./transaction-item.css";

const TrasactionItem = ({ transaction }) => {
  const { value, date } = transaction;
  return (
    <ListGroup.Item className="transaction-item">
      <span>{value}$</span>
      <span>{date}</span>
    </ListGroup.Item>
  );
};

export default TrasactionItem;
