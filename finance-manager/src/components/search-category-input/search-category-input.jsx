import { FloatingLabel, Form } from "react-bootstrap";
import "./search-category-input.css";

const SearchCategoryInput = ({ state }) => {
  if (state.posts.length) {
    return (
      <FloatingLabel
        controlId="floatingInput"
        label="Search by category name"
        className="mb-3 category-input"
      >
        <Form.Control type="search" placeholder="Search by category name" />
      </FloatingLabel>
    );
  } else {
    return;
  }
};

export default SearchCategoryInput;
