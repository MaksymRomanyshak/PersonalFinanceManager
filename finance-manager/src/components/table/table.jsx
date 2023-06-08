import { Table } from "react-bootstrap";
import CategoryItem from "../category-item/categoty-item";

const ExpensesTable = ({ state, updateState }) => {
  // const categoriesInfo = [
  //   {
  //     id: 1,
  //     name: "Food",
  //     description: "good place",
  //     date: "02.08.2004",
  //     value: 250,
  //   },
  //   {
  //     id: 2,
  //     name: "Clothes",
  //     description: "good place",
  //     date: "02.08.2004",
  //     value: 250,
  //   },
  //   {
  //     id: 3,
  //     name: "Market",
  //     description: "good place",
  //     date: "02.08.2004",
  //     value: 250,
  //   },
  // ];
  return (
    <Table striped borderless hover>
      <thead>
        <tr>
          <td></td>
          <th>Category</th>
          <th>Description</th>
          <th>Sum</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      {state.posts.map((category) => (
        <CategoryItem key={category._id} category={category} />
      ))}
    </Table>
  );
};

export default ExpensesTable;
