import styled from "@emotion/styled";

export const StyledAddModal = styled.div`
    width: 30%;
    height: 200px;

    align-items: center;
    background:white;
    border: 1px solid;
    border-radius: 10px;
    justify-content: space-around;
    left: 30%;
    position: absolute;
    top: 20%;
    z-index: 1;
    div#title {
        p {
            text-align: center;
            font-size: 30px;
            font-family: cursive;
        }
    }

    div#inputfield {
        display: flex;
        justify-content: space-around;
    }

    @media (max-width: 900px) {
        width: 50%;
        
    }

    @media (max-width: 600px) {
        div#title {
            p {
                text-align: center;
                font-size: 20px;
                font-family: cursive;
            }
        }
    
        div#inputfield {
            display: flex;
            justify-content: space-around;
        }
    }
`
export const StyledAddButton = styled.button`
    font-size: 40px;
    font-family: sans-serif;

    @media (max-width: 600px) {
        font-size: 20px
    }
`