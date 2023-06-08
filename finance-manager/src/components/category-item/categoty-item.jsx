import { Button } from "react-bootstrap";

const CategoryItem = ({ category }) => {
  const { name, body, value, date } = category;
  return (
    <tbody>
      <tr>
        <td></td>
        <td>{name}</td>
        <td>{body}</td>
        <td>{value}$</td>
        <td>{date}</td>
        <td style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Button variant="outline-dark">Edit</Button>
          <Button variant="outline-dark">Delete</Button>
        </td>
      </tr>
    </tbody>
  );
};

export default CategoryItem;
