import React from "react";
import { StyledExitButton } from "./ExitButton.Styled"
import { AiFillCloseCircle } from "react-icons/ai";

const ExitButton = (props) => {

    // const exitButtonElement  = document.getElementById('exit-button');
    // exitButtonElement .addEventListener('click', function() {
    //     alert('okay');
    // })
    return (
        <>
        <StyledExitButton id="exit-button" onClick={() => props.setIsSituation(false)}>
            exit
        </StyledExitButton>
        
        </>
    )
}

export default ExitButton;