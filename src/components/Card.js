import React, { useState} from "react";
import { StyledCard, StyledButton } from "./Card.styled";

const Card = (props) => {
    // const {title, content} = useParams();
    const title = props.title;
    const content = props.content;
    const id = props.id;
    // const [title, setTilte] = useState('This is my Title');
    // const [content, setContent] = useState("Syria is currently involved hello Syria is currently involved style style style style style style style style style style style style style style style style style style style style style style style style style style style  hello Syria is currently involved hello in a severe civil conflict, which is expected to lead to the removal of the secular leader Bashar al-Asad. The country's future remains uncertain, as it may be impacted by the presence of Islamic extremists who perceive this conflict as part of a broader struggle primarily involving Israel and the United States. The interdependent link between the security of Jordan and the stability of Israel is acknowledged by policy leaders in Jordan, leading to their endorsement of a one-state solution.")
    const [isZoom, setIsZoom] = useState(false);

    const handleZoom = () => {
        
        const sel_card = document.getElementById("card_border");
        
        if (!isZoom) {
            
            sel_card.classList.add("sel-card");
        } else {
            
            sel_card.classList.remove("sel-card");
        }
        setIsZoom(!isZoom);

    }
    return (
        <StyledCard id={id}>
            <div id="card_border">
                <div id="title">
                    <p id="title">{title}</p>
                    <StyledButton id={id} onClick={handleZoom}>
                        {isZoom ? " Out" : "Zoom"}
                    </StyledButton>
                </div>

                <div id="content">
                    {content}
                </div>
            </div>
        </StyledCard>
    )
}

export default Card;