import { FloatingLabel, Form } from "react-bootstrap";
import "./search-category-input.css";

const SearchCategoryInput = ({ state, updateState }) => {
  const handleChanghe = (event) => {
    const searchField = event.target.value.toLowerCase();
    updateState(() => {
      return {
        searchField,
      };
    });
  };
  return (
    <FloatingLabel
      controlId="floatingInput"
      label="Search by category name"
      className="mb-3 category-input"
      onChange={handleChanghe}
    >
      <Form.Control type="search" placeholder="Search by category name" />
    </FloatingLabel>
  );
};

export default SearchCategoryInput;
