import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const ProfitInfoCard = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [
        {
          name: ".",
          color: "white",
          data: [],
        },
        {
          name: ".",
          color: "#F05252",
          data: [788],
        },
      ],
      chart: {
        type: "bar",
        height: 100,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        show:false,
        bar: {
          horizontal: true,
          borderRadius: 6,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: (value) => "$" + value,
        },
      },
      xaxis: {
        categories: [],
        labels: {
          
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
          formatter: (value) => "$" + value,
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
        },
      },
      grid: {
        strokeDashArray: 0,
        padding: {
          left: 2,
          right: 2,
          top: -20,
        },
      },
      legend: {
        show: true,
        position: "bottom",
      },
      fill: {
        opacity: 1,
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="max-w-sm w-full  rounded-lg  p-4 md:p-6">
      

      {/* Chart */}
      <div ref={chartRef} id="bar-chart"></div>
    </div>
  );
};

export default ProfitInfoCard;
