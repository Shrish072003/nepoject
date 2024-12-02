import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const LeadsInfoCard = () => {
  const chartRef = useRef(null);

  // ApexCharts options
  const options = {
    colors: ["#1A56DB", "#FDBA8C"],
    series: [
      {
        name: "Organic",
        data: [
          { x: "Mon", y: 231 },
          { x: "Tue", y: 122 },
          { x: "Wed", y: 63 },
          { x: "Thu", y: 421 },
          { x: "Fri", y: 122 },
          { x: "Sat", y: 323 },
          { x: "Sun", y: 111 },
        ],
      },
      {
        name: "Social media",
        data: [
         
        ],
      },
    ],
    chart: {
      type: "bar",
      height: 300,
      fontFamily: "Inter, sans-serif",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: { horizontal: false, columnWidth: "60%", borderRadius: 8 },
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: { fontFamily: "Inter, sans-serif" },
    },
    stroke: { show: true, width: 0, colors: ["transparent"] },
    grid: { show: false, padding: { left: 2, right: 2, top: -14 } },
    xaxis: {
      labels: {
        style: { fontFamily: "Inter, sans-serif", fontSize: "12px" },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: { show: false },
    fill: { opacity: 1 },
    dataLabels: { enabled: false },
    legend: { show: false },
  };

  useEffect(() => {
    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => chart.destroy();
  }, [options]);

  return (
    <div className="max-w-sm w-full leads1 rounded-lg  p-4 md:p-6">
      {/* Chart */}
      <div ref={chartRef} id="column-chart"></div>
    </div>
  );
};

export default LeadsInfoCard;
