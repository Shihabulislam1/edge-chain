import { useState } from "react";
import axios from "axios";
import styles from "./FileUpload.module.css";
const FileUpload = ({ contract, account, provider, api }) => {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      setUploading(true);
      const response = await fetch(`${api}/average-temperature-humidity`);
      const data = await response.json();
      const jsonData = JSON.stringify(data);

      const blob = new Blob([jsonData], { type: "application/json" });

      const file = new File([blob], "data.json", { type: "application/json" });

      const formData = new FormData();
      formData.append("file", file);

      const resFile = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: formData,
        headers: {
          pinata_api_key: `11ec46ebbbdeae3b5451`,
          pinata_secret_api_key: `029940833a9b9f7caef7d0f292a77e82406920fb99ce1e2f0349f2cd143e3dff`,
          "Content-Type": "multipart/form-data",
        },
      });

      const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
      contract.add(account, ImgHash);
      setUploading(false);
      console.log(contract);
      console.log(ImgHash);
    } catch (e) {
      alert("Unable to upload Data to Pinata");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="top flex flex-col justify-center items-center gap-8 m-6 border rounded-3xl py-6">
      <p className="text-xl text-gray-300">
        Upload analysed Data of last 24 hours from Edge Server to IPFS
      </p>
      <button
        onClick={handleUpload}
        className="text-blue-950 px-8 py-3 rounded-xl text-xl bg-gray-200 font-bold tracking-widest hover:bg-white hover:scale-105 transition duration-300 ease-in-out "
      >
        {uploading === true ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default FileUpload;
