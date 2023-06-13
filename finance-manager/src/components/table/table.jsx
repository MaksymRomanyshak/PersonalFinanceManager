import { Table } from "react-bootstrap";
import CategoryItem from "../category-item/categoty-item";

const ExpensesTable = ({ state, deleteData, updateState }) => {
  const filteredPosts = state.posts.filter((el) =>
    el.name.toLowerCase().includes(state.searchField)
  );
  if (state.posts.length) {
    return (
      <Table striped borderless hover style={{ margin: "0%" }}>
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
        {filteredPosts.map((category) => (
          <CategoryItem
            key={category._id}
            category={category}
            deleteData={deleteData}
            state={state}
            updateState={updateState}
          />
        ))}
      </Table>
    );
  } else {
    return;
  }
};

export default ExpensesTable;
