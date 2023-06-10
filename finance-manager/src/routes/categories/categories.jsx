import { Fragment } from "react";

import ExpensesTable from "../../components/table/table";
import SearchCategoryInput from "../../components/search-category-input/search-category-input";
import CreateCategoryForm from "../../components/create-category-form/create-category-form";

const Categories = ({ state, updateState, getData, deleteData }) => {
  return (
    <Fragment>
      <CreateCategoryForm
        state={state}
        updateState={updateState}
        getData={getData}
      />
      <SearchCategoryInput state={state} />
      <ExpensesTable state={state} deleteData={deleteData} />
    </Fragment>
  );
};

export default Categories;
