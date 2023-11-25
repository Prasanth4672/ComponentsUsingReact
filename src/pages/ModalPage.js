import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";




function ModalPage(){

    const [showModal,setShowModal] = useState(false);

    const handleClick= () =>{
        setShowModal(true);
    };

    const handleClose= () =>{
        setShowModal(false);
    };

    const actionButton = <Button primary onClick={handleClose}>I Accept!</Button> 
    const modal = <Modal onClose={handleClose} actionButton={actionButton}>
                    <p>Here is the Import Agrements to Accept! </p>
                  </Modal>;

    return(
        <div>
            <Button onClick ={handleClick} primary >
                Open Modal
            </Button>
        {showModal && modal}
        </div>
    );
}

export default ModalPage;