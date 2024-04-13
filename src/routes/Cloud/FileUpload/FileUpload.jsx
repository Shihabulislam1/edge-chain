import { useState } from "react";
import axios from "axios";
import styles from './FileUpload.module.css'
const FileUpload=({contract, account, provider})=>{
    const [file, setFile]= useState(null);
    const [fileName, setFileName]= useState("No image selected");
    const handleSubmit= async(e)=>{
        e.preventDefault();
        if(file){
            try{
                const formData= new FormData();
                formData.append("file", file);
                const resFile= await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers:{
                        pinata_api_key:`11ec46ebbbdeae3b5451`,
                        pinata_secret_api_key:`029940833a9b9f7caef7d0f292a77e82406920fb99ce1e2f0349f2cd143e3dff`,
                        "Content-Type": "multipart/form-data",
                    },
                });

                const ImgHash=`https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
                contract.add(account,ImgHash);
                console.log(contract)
                alert("Sucessfully Data Uploaded");
                setFileName("No image selected");
                setFile(null);
                console.log(ImgHash);

            } catch(e){

                alert("Unable to upload Data to Pinata");

            }

        }

        alert("Successfully Data Uploaded");
        setFileName("No image selected");
        setFile(null);

    };

    const retrieveFile=(e)=>{
        const data= e.target.files[0];
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(data);
        reader.onloadend=()=>{
            setFile(e.target.files[0]);
        };
        setFileName(e.target.files[0].name);
        e.preventDefault();
        console.log(e.target.files[0].name);
    };


    return(
        <div className="top">
            <form className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="file-upload" className={styles.choose}>
                    Choose File
                </label>
                <input disabled={!account}
                       type="file"
                       id="file-upload"
                       name="data"
                       onChange={retrieveFile} />
              <span className={styles.textArea}>Image:{fileName}</span>
              <button type="submit" className={styles.upload} disabled={!file}>
                Upload File
              </button>
            </form>
        </div>
    );

};

export default FileUpload;