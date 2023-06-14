import { FloatingLabel, Form } from "react-bootstrap";
import "./search-category-input.css";

const SearchCategoryInput = ({ state, updateState }) => {
  const handleChanghe = ({ target }) => {
    const searchField = target.value.toLowerCase();
    updateState({ searchField });
  };
  return (
    <FloatingLabel
      controlId="floatingInput"
      label="Search by category name"
      className="mb-3 category-input"
      onChange={(event) => {
        handleChanghe(event);
      }}
    >
      <Form.Control type="search" placeholder="Search by category name" />
    </FloatingLabel>
  );
};

export default SearchCategoryInput;
