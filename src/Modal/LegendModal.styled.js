import styled from "@emotion/styled";

export const StyledLegendModal = styled.div`
    width: 150px;
    padding: 10px 20px;
    
    p {
        margin-top: 0px;
        text-align: center;
        font-size: 20px;
        font-family: fantasy;
        letter-spacing: 1px;
    }
    div {
        width: 100%;
        display:flex;
        justify-content:left;
        margin-bottom: 5px;
        margin-right: 20px;
    }

    div#israel {
        width: 30px;
        height: 30px;
        background:blue;
    }
    div#palestine {
        width: 30px;
        height: 30px;
        background:green;
    }
    div#neutral {
        width: 30px;
        height: 30px;
        background:grey;
    }

`