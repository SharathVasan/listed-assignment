import Chart from "react-apexcharts";

const PieChart = () => {
  const series = [55, 31, 14];
  const options = {
    fill: {
      colors: ["#98D89E", "#F6DC7D", "#EE8484"],
    },
    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    legend: {
      position: "right",
      horizontalAlign: "right",
      labels: {
        colors: ["#98D89E", "#F6DC7D", "#EE8484"],
      },
    },
    chart: {
      animations: {
        enabled: true,
        easing: "easein",
        speed: 300,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    responsive: [
      {
        breakpoint: undefined,
        options: {},
      },
    ],
  };

  return <Chart options={options} series={series} type="pie" width={330} />;
};

export default PieChart;
