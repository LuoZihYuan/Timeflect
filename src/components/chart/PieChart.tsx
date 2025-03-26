import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Card, CardBody } from "@heroui/react";
import { commonColors } from "@heroui/theme";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  title: string;
  labels: string[];
  data: number[];
}

export const PieChart: React.FC<PieChartProps> = ({ title, labels, data }) => {
  const sum = data.reduce((acc, curr) => curr + acc, 0);
  const PieChartData = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: data.map((value) => ((value / sum) * 100).toFixed(2)),
        backgroundColor: [
          commonColors.blue[400],
          commonColors.purple[400],
          commonColors.green[400],
          commonColors.red[400],
          commonColors.pink[400],
          commonColors.yellow[400],
          commonColors.cyan[400],
          commonColors.zinc[400],
        ],
        borderColor: [
          commonColors.blue[200],
          commonColors.purple[200],
          commonColors.green[200],
          commonColors.red[200],
          commonColors.pink[200],
          commonColors.yellow[200],
          commonColors.cyan[200],
          commonColors.zinc[200],
        ],
      },
    ],
  };
  return (
    <Card className="p-6">
      <CardBody>
        <Pie
          height="100%"
          data={PieChartData}
          options={{ maintainAspectRatio: false }}
        />
      </CardBody>
    </Card>
  );
};
