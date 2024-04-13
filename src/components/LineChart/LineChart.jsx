import { useState, useEffect } from "react";
import axios from "axios";
import ReactApexChart from "react-apexcharts";
import styles from './LineChart.module.css';
import PropTypes from 'prop-types';

const ChartComponent = ({ api="http://127.0.0.1:3000" }) => {
  const [chartData, setChartData] = useState({
    series: [{ data: [] }],
    options: {
      chart: {
        type: "line",
        background: "transparent",
      },
      xaxis: {
        categories: [],
        labels: {
          style: {
            colors: "#6e767f",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#6e767f",
          },
        },
      },
      colors: ["#90caf9"],
    },
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(`${api}/blocks/created-per-hour`);
      const { blocksPerHour } = response.data;

      const categories = Object.keys(blocksPerHour).slice(-24);
      const data = Object.values(blocksPerHour).slice(-24);

      setChartData({
        series: [{ data }],
        options: {
          ...chartData.options,
          xaxis: {
            categories,
            labels: {
              style: {
                colors: "#6e767f",
              },
            },
          },
        },
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Initial fetch

    const interval = setInterval(fetchData, 3600000); // Fetch data every hour
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div className={styles.container}>
    <h2 className={styles.title}>Blocks Created Per Hour(Last 24 hours)</h2>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default ChartComponent;

ChartComponent.propTypes = {
  api: PropTypes.string
};