import { Fragment } from "react";

import ExpensesTable from "../../components/table/table";
import SearchCategoryInput from "../../components/search-category-input/search-category-input";
import CreateCategoryBTN from "../../components/create-category-btn/create-category-btn";
import CreateCategoryForm from "../../components/create-category-form/create-category-form";

const Categories = ({ state, updateState }) => {
  return (
    <Fragment>
      <SearchCategoryInput />
      <ExpensesTable state={state} updateState={updateState} />
      <CreateCategoryForm state={state} updateState={updateState} />
      <CreateCategoryBTN />
    </Fragment>
  );
};

export default Categories;
