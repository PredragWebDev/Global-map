import styled from "@emotion/styled";

export const StyledAddModal = styled.div`
    width: 30%;
    height: 200px;

    align-items: center;
    background:white;
    border: 1px solid;
    border-radius: 10px;
    justify-content: space-around;
    left: calc((100% - 600px) / 2);
    position: absolute;
    top: 20%;

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
`
export const StyledAddButton = styled.button`
    font-size: 40px;
    font-family: sans-serif;
`