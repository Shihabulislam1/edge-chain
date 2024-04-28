import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Modal from "./Modal/Modal";
import Display from "./Display/Display";
import FileUpload from "./FileUpload/FileUpload";
import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import styles from './Cloud.module.css';
import Header from '../../components/Header/Header';

function Cloud() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState([]);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const wallet = async () => {
      if (provider) {
        //await provider.send("eth_requestAccount",[]);
        window.ethereum.on("accountsChanged", () => {
          window.location.reload;
        });
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        console.log(address);
        setAccount(address);
        const contractAddress = "0xB9dE16f9B2912De99837903BD646c21B74C92b4d";
        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        console.log(contract);
        setContract(contract);
        setProvider(signer);
      } else {
        alert("Cannot Recognise Metamask!");
      }
    };

    provider && wallet();
  }, []);
  return (<>
  <Header/>
    <section >
    <div className={styles.bg}></div>
    <div className={styles.bg2}></div>
    <div className={styles.bg3}></div>
      {!modalOpen && (
        <button className={styles.share} onClick={() => setModalOpen(true)}>
          Share
        </button>
      )}
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
      )}
      <div className="">
        <h1 style={{ color: "white" }}>IoT EDGE CLOUD 3.0</h1>
        

        <p style={{ color: "white" }}>Account : {account}</p>
        <div className="">
        <FileUpload
          account={account}
          contract={contract}
          provider={provider}
        ></FileUpload>
        <Display account={account} contract={contract}></Display></div>
      </div>
      
    </section></>
  );
}

export default Cloud;
