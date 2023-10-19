import React from "react"
import {AiOutlineClose} from "react-icons/ai";
import { StyledConfirmModal } from "./ConfirmModal.styled"
const ConfirmModal = (props) => {
    const handleYes = () => {
        props.setIsSave(true);
        props.setShowSaveModal(false);
    }
    const handleNo = () => {
        props.setIsSave(false);
        props.setShowSaveModal(false)
    }

    return (
        <StyledConfirmModal>
            <div id="question">
                Are you Sure to save all data?
                <AiOutlineClose style={{width:"20px", height:"20px", position:"absolute", right:"15px", cursor:'pointer'}} onClick={() => props.setShowSaveModal(false)}/>
            </div>

            <div id="buttonGroup">
                <button id="yes" onClick={handleYes}>YES</button>
                <button id="no" onClick={handleNo}>NO</button>
            </div>
        </StyledConfirmModal>
    )
}

export default ConfirmModal;