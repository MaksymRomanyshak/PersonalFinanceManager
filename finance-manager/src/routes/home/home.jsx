import { useEffect } from "react";

import BarChart from "../../components/bar-chart/bar-chart";

import "./home.css";

const Home = ({ state, getData }) => {
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="chart">
      <div style={{ width: "70%" }}>
        <BarChart state={state}></BarChart>
      </div>
    </div>
  );
};

export default Home;
