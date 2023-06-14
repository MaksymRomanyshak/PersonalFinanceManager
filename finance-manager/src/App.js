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
      isEditing: { status: false, id: "" },
    };
  }

  updateState = (newState) => {
    this.setState(() => {
      return newState;
    });
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
      .then((response) => {
        console.log("data has been deleted:", response.data);
        this.getData();
      })
      .catch((err) => {
        console.log(err.msg);
      });
  };

  render() {
    return (
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route
            index
            element={<Home state={this.state} getData={this.getData} />}
          />
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
          <Route
            path="transactions"
            element={<Transactions state={this.state} getData={this.getData} />}
          />
        </Route>
      </Routes>
    );
  }
}

export default App;
