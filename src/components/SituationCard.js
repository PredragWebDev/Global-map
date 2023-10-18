import React, { useEffect, useState} from "react";
import { StyledSituationCard, StyledButton } from "./SituationCard.styled";
import {AiOutlineClose} from "react-icons/ai";
import axios from "axios";

const SituationCard = (props) => {
    const {id, situationName, isAddRemove, oneSide, otherSide} = props;

    const handleDeleteSituation = (situationName) => {
        axios.post("http://127.0.0.1:5001/api/admin/delete_situationName", {
            situationName
        })
        .then((response) => {
            
            if (response.data.state === "okay") {
                props.handleShowSituation();
                props.setIsAddRemove(true);
            }
            else {
                alert("Faild!");
            }
            
        }).catch((error) => {
            if (error.response) {
                alert(error);
                console.log("error~~~~~~~~~")
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })     
    }

    const handleSaveOption = (situationName) => {
        if (!isAddRemove) {
            
            props.setSituationNameForSaving({situationName, oneSide, otherSide});
            props.setIsSaveOptionModal(true);
        }
    }

    return (
        <StyledSituationCard keys={id} id={id}>
            <div id={`card_board`}  className={isAddRemove && "removeCursorPoint"} onClick={() => handleSaveOption(situationName)}>
                <div id="removebutton">
                    {isAddRemove && <AiOutlineClose style={{width:"30px", height:"30px", cursor:"pointer"}} onClick={() => handleDeleteSituation(situationName)}/>}
                </div>

                <div id="content">
                    {/* {`${situationName}`} */}
                    <p id="situationName">{situationName}</p>
                    <p id="oneSide">{`(${oneSide}, `}</p>
                    <p id="otherSide">{`${otherSide})`}</p>
                </div>
            </div>
        </StyledSituationCard>
    )
}

export default SituationCard;