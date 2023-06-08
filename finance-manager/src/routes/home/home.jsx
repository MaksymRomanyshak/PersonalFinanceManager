import { Component } from "react";
// import axios from "axios";
import Diagram from "../../components/diagram/diagram";

import "./home.css";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        { name: "food", value: 74, date: "02.06.2023" },
        { name: "rest", value: 350, date: "02.06.2023" },
        { name: "cloth", value: 150, date: "05.06.2023" },
        { name: "intertainment", value: 200, date: "06.06.2023" },
      ],

      dailydata: [
        { name: "food", value: 74, date: "02.06.2023" },
        { name: "rest", value: 350, date: "02.06.2023" },
      ],
      // posts: [],
    };
  }

  // componentDidMount = () => {
  //   this.getData();
  // };

  // getData = () => {
  //   axios
  //     .get("/api")
  //     .then((response) => {
  //       const data = response.data;
  //       this.setState({ posts: data });
  //       console.log(this.state);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  render() {
    return (
      <div className="content">
        <div>
          <h3>Your daily expenses</h3>
          <Diagram data={this.state.dailydata}></Diagram>
        </div>
        <div>
          <h3>Your total expenses</h3>
          <Diagram data={this.state.data}></Diagram>
        </div>
      </div>
    );
  }
}

export default Home;
