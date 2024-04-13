import { useEffect } from "react";
import styles from './Modal.module.css'
const Modal=({setModalOpen, contract})=>{
    const sharing= async()=>{
        const address = document.querySelector(".address").value;
        await contract.allow(address);
        setModalOpen(false);
    };

    useEffect(()=>{
        const accessList = async()=>{
            const addressList = await contract.shareAccess();
            let select = document.querySelector("#selectNumber");
            const options= addressList;

            for(let i=0; i<options.length;i++){

                let opt= options[i];
                let e1= document.createElement("option");
                e1.textContent= opt;
                e1.value = opt;
                select.appendChild(e1);

            }
        };

        contract && accessList();

    }, [contract]);


    return(
        <>
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <div className={styles.title}> Share with</div>
                <div className={styles.body}>
                    <input type="text" className={styles.address} placeholder="Enter Address"></input>
                </div>

                <form id="myForm">
                    <select id="selectNumber">
                        <option className={styles.address}>People with Access</option>
                    </select>
                </form>
                <div className={styles.footer}>
                    <button onClick={()=>{
                        setModalOpen(false);
                    }} id={styles.cancelBtn}>Cancel</button>
                    <button onClick={()=> sharing()}>Share</button>
                </div>
            </div>
        </div>
        </>
    );

};

export default Modal;