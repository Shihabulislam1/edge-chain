import React, { useEffect, useState } from "react";

const AnalysedData = ({ item }) => {
  const [averageData, setAverageData] = useState({});
  useEffect(() => {
    //    fetch data from item, item is api endpoint
    const fetchData = async () => {
      try {
        const response = await fetch(item);
        const data = await response.json();
        return data;
      } catch (e) {
        return { error: e };
      }
    };
    fetchData().then((data) => {
      setAverageData(data);
    });
  }, [item]);
  return averageData.averageTemperature == undefined ? (
    <></>
  ) : (
    <div className="bg-[#03112d]  px-6 flex justify-center items-center py-6 rounded-3xl ">
      <ul className="text-gray-100 flex flex-col gap-2">
      <li>{`Date: ${averageData.date}`}</li>
        <li>{`Total Blocks: ${averageData.totalBlocks}`}</li>
        <li>{`Average Temperature: ${averageData.averageTemperature}`}</li>
        <li>{`Average Humidity: ${averageData.averageHumidity}`}</li>
        <li>{`Average Vibration True Count: ${averageData.vibrationTrueCount}`}</li>
        <li>{`Average Vibration False Count: ${averageData.vibrationFalseCount}`}</li>
        <li>{`Average VibrationValue: ${averageData.averageVibrationValue}`}</li>
      </ul>
    </div>
  );
};

export default AnalysedData;
