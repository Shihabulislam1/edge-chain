import { useEffect, useState } from "react";
import styles from "./Display.module.css";
import AnalysedData from "../../../components/AnalysedData/AnalysedData";

const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  //   useEffect(() => {

  //       const temp= contract.display(account);

  //     console.log(temp);
  // }, [contract, account]);

  const getdata = async () => {
    let dataArray = await contract.display(account);
    let dataArray2 = [];
    dataArray.forEach((item) => {
      dataArray2.unshift(item);
    });

    const isEmpty = Object.keys(dataArray2).length == 0;
    if (!isEmpty) {
      const images = dataArray2.map((item, i) => {
        return <AnalysedData item={item} key={`a-${i}`} />;
      });

      setData(images);
    } else {
      alert("No Data to display");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {!data && (
        <button
          className={`${styles.center} ${styles.button}`}
          onClick={getdata}
        >
          Get Data
        </button>
      )}
      <div
        className={`mt-8 ${
          data && "border"
        } border-[#03112d] p-4  grid grid-cols-2  justify-center items-center gap-4 rounded-3xl min-w-[950px] max-w-[1200px]`}
      >
        {data}
      </div>
    </div>
  );
};

export default Display;
