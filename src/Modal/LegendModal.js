import React from "react";
import { StyledLegendModal } from "./LegendModal.styled";

const LegendModal = () => {
    return (
        <StyledLegendModal>
            <p id="legend"> Legend</p>
            <div>
                <div id="israel"></div>
                <p id="israel">Israel</p>
            </div>
            <div>
                <div id="palestine"></div>
                <p id="palestine">Palestine </p>
            </div>
            <div>
                <div id="neutral"></div>
                <p id="neutral">Neutral</p>
            </div>
        </StyledLegendModal>
    )
}

export default LegendModal;