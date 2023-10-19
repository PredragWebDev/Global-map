import styled from "@emotion/styled";

export const StyledConfirmModal = styled.div`
    width: 350px;
    height: 150px;
    position: absolute;
    left: 30%;
    top: 100px;
    background: white;
    border: 2px solid green;
    border-radius: 10px;
    padding: 20px 0px;
    div#question {
        margin-bottom:40px;

        div#exitIcon {
            display: flex;
            justify-content: end;
            padding: 0px 20px;
            margin-bottom: 20px;
        }

        div#text {
            text-align: center;
        }
    }
    p {
        margin:0px;
        font-size:20px;

    }

    div#buttonGroup {
        display:flex;
        justify-content:space-around;
    }

    button {
        font-size:20px;
        cursor:pointer;
    }
`