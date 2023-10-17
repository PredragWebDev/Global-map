import React, { useState} from "react";
import { StyledSituationCard, StyledButton } from "./SituationCard.styled";
import {AiOutlineClose} from "react-icons/ai";
import axios from "axios";

const SituationCard = (props) => {
    const {id, situationName, isAddRemove} = props;

    const handleDeleteSituation = (situationName) => {
        axios.post("http://127.0.0.1:5001/api/admin/delete_situationName", {
            situationName
        })
        .then((response) => {
            
            if (response.data.state === "okay") {
                props.handleShowSituation();
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
    return (
        <StyledSituationCard id={id}>
            <div id={`card_border`}>
                <div id="removebutton">
                    {isAddRemove && <AiOutlineClose style={{width:"30px", height:"30px", cursor:"pointer"}} onClick={() => handleDeleteSituation(situationName)}/>}
                </div>

                <div id="content">
                    {situationName}
                </div>
            </div>
        </StyledSituationCard>
    )
}

export default SituationCard;