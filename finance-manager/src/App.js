import { Component } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./routes/home/home";
import NavigationBar from "./routes/navigation/navigationbar";
import Categories from "./routes/categories/categories";
import Transactions from "./routes/transactions/transactions";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      body: "",
      value: "",
      posts: [],
      searchField: "",
    };
  }

  updateState = (newState) => {
    this.setState(newState);
  };

  getData = () => {
    axios
      .get("/api")
      .then((resposne) => {
        this.updateState({ posts: resposne.data });
      })
      .catch((err) => {
        console.log(err.msg);
      });
  };

  deleteData = (id) => {
    axios
      .delete(`/delete/${id}`)
      .then(() => {
        this.getData();
      })
      .catch((err) => {
        console.log(err.msg);
      });
  };

  render() {
    console.log(this.state);
    return (
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Home />} />
          <Route
            path="categories"
            element={
              <Categories
                state={this.state}
                updateState={this.updateState}
                getData={this.getData}
                deleteData={this.deleteData}
              />
            }
          />
          <Route path="transactions" element={<Transactions />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
