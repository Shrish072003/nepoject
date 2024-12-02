import React, { useRef, useEffect } from "react";
import ApexCharts from "apexcharts";

const ChartCircle = () => {
  const chartRef = useRef(null); // Reference to the chart container
  const chartData = [35.1, 23.5, 2.4, 5.4]; // Chart data

  useEffect(() => {
    // Chart configuration options
    const chartOptions = {
      series: chartData,
      colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
      chart: {
        type: "donut",
        height: 320,
      },
      stroke: {
        colors: ["transparent"],
        lineCap: "",
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                fontFamily: "Inter, sans-serif",
                offsetY: 20,
              },
              total: {
                showAlways: true,
                show: true,
                label: "Unique visitors",
                fontFamily: "Inter, sans-serif",
                formatter: function (w) {
                  const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                  return "$" + sum + "k";
                },
              },
              value: {
                show: true,
                fontFamily: "Inter, sans-serif",
                offsetY: -20,
                formatter: function (value) {
                  return value + "k";
                },
              },
            },
            size: "80%",
          },
        },
      },
      grid: {
        padding: {
          top: -2,
        },
      },
      labels: ["Direct", "Sponsor", "Affiliate", "Email marketing"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "bottom",
        fontFamily: "Inter, sans-serif",
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return value + "k";
          },
        },
      },
      xaxis: {
        labels: {
          formatter: function (value) {
            return value + "k";
          },
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
    };

    // Initialize and render the ApexCharts chart
    const chart = new ApexCharts(chartRef.current, chartOptions);
    chart.render();

    // Cleanup function to destroy the chart on component unmount
    return () => chart.destroy();
  }, [chartData]);

  return (
    <div className="max-w-sm w-full rounded-lg  cir  p-4 md:p-6">
      <div className="py-6 " ref={chartRef} />
    </div>
  );
};

export default ChartCircle;
