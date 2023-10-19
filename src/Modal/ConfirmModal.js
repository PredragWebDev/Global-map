import React from "react"
import {AiOutlineClose} from "react-icons/ai";
import { StyledConfirmModal } from "./ConfirmModal.styled"
const ConfirmModal = (props) => {
    const handleYes = () => {
        props.save_Feeds();
        props.setShowSaveModal(false);
    }
    const handleNo = () => {
        props.setShowSaveModal(false)
    }

    return (
        <StyledConfirmModal>
            <div id="question">
                <div id="exitIcon">

                    <AiOutlineClose style={{width:"20px", height:"20px", cursor:'pointer'}} onClick={() => props.setShowSaveModal(false)}/>
                </div>
                <div id="text">
                    
                    Are you sure you want to save all data?
                </div>
            </div>

            <div id="buttonGroup">
                <button id="yes" onClick={handleYes}>YES</button>
                <button id="no" onClick={handleNo}>NO</button>
            </div>
        </StyledConfirmModal>
    )
}

export default ConfirmModal;