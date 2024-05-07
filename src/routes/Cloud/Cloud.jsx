import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Display from "./Display/Display";
import FileUpload from "./FileUpload/FileUpload";
import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import Header from "../../components/Header/Header";
import propTypes from "prop-types";

function Cloud({ api = "http://localhost:3000" }) {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState([]);
  const [provider, setProvider] = useState(null);

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
  return (
    <div className="p-0 bg-blue-950">
      <Header />
      <section className="pt-12">
        <div className="min-h-screen">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-gray-200 text-2xl font-semibold text-center mb-8">
              IoT EDGE CLOUD
            </h1>

            <p className="text-gray-300 text-xl  text-center mb-12">
              <span className="">Account: </span>
              <span className="text-gray-100 font-extralight italic">
                {account}
              </span>
            </p>

            <div className="min-w-[1250px] max-w-[1450px]">
              <FileUpload
                account={account}
                contract={contract}
                provider={provider}
                api={api}
              />
            </div>
            <div className="">
              <Display account={account} contract={contract}></Display>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cloud;

Cloud.propTypes = {
  api: propTypes.string,
};
