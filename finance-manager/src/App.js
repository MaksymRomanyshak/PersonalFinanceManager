import { Component } from "react";
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
    };
  }

  updateState = (newState) => {
    this.setState(newState);
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
              <Categories state={this.state} updateState={this.updateState} />
            }
          />
          <Route path="transactions" element={<Transactions />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
