import { useState, useEffect, Fragment } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Alert } from "react-bootstrap";

import "./alert.css";

const BarChart = ({ state }) => {
  useEffect(() => {
    setData({
      labels: chartLabels(),
      datasets: [
        {
          label: "Day By Day Expenses | $",
          data: chartData(),
          backgroundColor: "#fca311",
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
  }, [state.posts]);

  const [data, setData] = useState({
    labels: [],
    datasets: [{ label: "Day By Day Expenses | $", data: [] }],
  });

  const chartLabels = () => {
    const labels = state.posts
      .map((el) => el.date)
      .filter((value, index, array) => array.indexOf(value) === index)
      .reverse()
      .splice(-7);
    return labels;
  };
  const chartData = () => {
    const data = [];
    const dateValueObj = {};

    const dateValueArr = state.posts.map((el) => {
      return { date: el.date, value: el.value };
    });
    for (const el of dateValueArr) {
      dateValueObj[el.date] === undefined
        ? (dateValueObj[el.date] = el.value)
        : (dateValueObj[el.date] += el.value);
    }
    for (const [, value] of Object.entries(dateValueObj)) {
      data.push(value);
    }
    return data.reverse().splice(-7);
  };

  if (state.posts.length) {
    return (
      <Fragment>
        <h3>
          Your expenses{" "}
          {data.labels[0] === data.labels[data.labels.length - 1]
            ? `for ${data.labels[0]}:`
            : `from ${data.labels[0]} to ${
                data.labels[data.labels.length - 1]
              }:`}
        </h3>
        <Bar data={data} />
      </Fragment>
    );
  } else {
    return (
      <Alert variant="warning" className="home-alert">
        You do not have any expenses,{" "}
        <Alert.Link href="/categories">here you can add some</Alert.Link>.
      </Alert>
    );
  }
};

export default BarChart;
