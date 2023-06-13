import { Fragment, useEffect } from "react";

import ExpensesTable from "../../components/table/table";
import SearchCategoryInput from "../../components/search-category-input/search-category-input";
import CreateCategoryForm from "../../components/create-category-form/create-category-form";

const Categories = ({ state, updateState, getData, deleteData }) => {
  useEffect(() => {
    getData();
  }, []);
  return (
    <Fragment>
      <CreateCategoryForm
        state={state}
        updateState={updateState}
        getData={getData}
      />
      <SearchCategoryInput state={state} updateState={updateState} />
      <ExpensesTable
        state={state}
        deleteData={deleteData}
        updateState={updateState}
      />
    </Fragment>
  );
};

export default Categories;
