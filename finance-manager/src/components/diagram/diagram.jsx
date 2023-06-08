import { PieChart, Pie, Tooltip } from "recharts";

const Diagram = ({ data }) => {
  return (
    <PieChart width={250} height={250}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#212529"
        label
      />
      <Tooltip />
    </PieChart>
  );
};

export default Diagram;
