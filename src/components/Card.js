import React, { useState} from "react";
import { StyledCard, StyledButton } from "./Card.styled";

const Card = (props) => {
    const title = props.title;
    const content = props.content;
    const id = props.id;
    const [isZoom, setIsZoom] = useState(false);

    const handleZoom = (id) => {
        
        const sel_card = document.getElementById(`transition${id}`);

        if (!isZoom) {
            props.setShowExitButton(false);
            sel_card.classList.add("sel-card");
        
        } else {
            props.setShowExitButton(true);

            sel_card.classList.remove("sel-card");
         
        }
        setIsZoom(!isZoom);

    }
    return (
        <StyledCard id={id}>
            <div id={`transition${id}`}>

                <div id={`card_border`}>
                    <div id="title">
                        <p id="title">{title}</p>
                        <StyledButton id="zoom" onClick={() => handleZoom(id)}>
                            {isZoom ? " Out" : "Zoom"}
                        </StyledButton>
                    </div>

                    <div id="content">
                        {content}
                    </div>
                </div>
            </div>
        </StyledCard>
    )
}

export default Card;