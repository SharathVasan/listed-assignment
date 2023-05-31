import Chart from "react-apexcharts";

const LineChart = () => {
  const series = [
    {
      name: "Guest",
      data: [192, 220, 240, 360, 120, 540, 300],
    },
    {
      name: "User",
      data: [500, 222, 350, 120, 480, 700, 120],
    },
  ];
  const options = {
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
    chart: {
      animations: {
        enabled: true,
        easing: "easein",
        speed: 400,
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
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Week 1",
        "Week 2",
        "Week 3",
        "Week 4",
        "Week 5",
        "Week 6",
        "Week 7",
      ],
    },
  };

  return (
    <Chart
      options={options}
      type="line"
      series={series}
      width="100%"
      height={180}
    />
  );
};

export default LineChart;
