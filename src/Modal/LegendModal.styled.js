import styled from "@emotion/styled";

export const StyledLegendModal = styled.div`
    width: 250px;
    padding: 10px 20px;
    
    p {
        margin-top: 0px;
        text-align: center;
        font-size: 20px;
        font-family: fantasy;
        letter-spacing: 1px;
    }
    
    div#button {
        display: flex;
        justify-content: center;

        button {
            width: 48%;
            cursor: pointer;
            height: 35px;
            border-radius: 10px;
            font-size: 20px;
        }
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
    button#ok {
        
    }

`